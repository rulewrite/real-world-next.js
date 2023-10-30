import getProductDetailsById from '@/lib/graphql/queries/getProductDetailsById';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

// 배송 가능한 국가
const shipping_address_collection: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection =
  {
    allowed_countries: ['IT', 'US'],
  };

// 배송 방식에 따라 배송지를 다르게 책정
const shipping_options: Array<Stripe.Checkout.SessionCreateParams.ShippingOption> =
  [
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'EUR',
        },
        display_name: '무료배송',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 3,
          },
          maximum: {
            unit: 'business_day',
            value: 5,
          },
        },
      },
    },
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 499,
          currency: 'EUR',
        },
        display_name: '비행기로 배송',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 1,
          },
          maximum: {
            unit: 'business_day',
            value: 1,
          },
        },
      },
    },
  ];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items } = req.body;

  const { products } = await getProductDetailsById(Object.keys(items));

  const line_items: Array<Stripe.Checkout.SessionCreateParams.LineItem> =
    products.map((product) => {
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
    shipping_address_collection,
    shipping_options,
    // .env.* 파일에서 지정
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancel`,
  });

  res.status(201).json({ session });
}
