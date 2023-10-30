import getProductDetailsById from '@/lib/graphql/queries/getProductDetailsById';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items } = req.body;

  const { products } = await getProductDetailsById(Object.keys(items));

  const line_items = products.map((product) => {
    return {
      // 사용자가 결제 과정에서 수량을 변경할 수 있도록
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      price_data: {
        // 원하는 화폐 단위 지정
        currency: 'EUR',
        product_data: {
          name: product.name,
          images: product.images.map((image) => image.url),
        },
        unit_amount: product.price,
      },
      quantity: items[product.id],
    };
  });

  const session = await stripe.checkout.sessions.create({
    // 'subscription' 또는 'setup'을 지정할 수 있다.
    mode: 'payment',
    line_items,
    payment_method_types: ['card', 'sepa_debit'],
    // .env.* 파일에서 지정
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancel`,
  });

  res.status(201).json({ session });
}
