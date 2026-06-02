"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  price: number;
  priceId: string | null;
  currency: string;
  interval: string;
  features: string[];
  isPopular: boolean;
}

interface PricingCardsProps {
  tiers: PricingTier[];
}

const PricingCards = ({ tiers }: PricingCardsProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`relative flex flex-col ${
            tier.isPopular
              ? "border-2 border-primary shadow-lg"
              : ""
          }`}
        >
          {tier.isPopular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
          )}

          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{tier.name}</CardTitle>

            <div className="mt-4">
              <span className="text-5xl font-bold">${tier.price}</span>
              <span className="text-muted-foreground">
                /{tier.interval}
              </span>
            </div>
          </CardHeader>

          <CardContent className="flex-1">
            <ul className="space-y-4">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <Button
              className="w-full"
              variant={tier.isPopular ? "default" : "outline"}
            >
              {tier.price === 0
                ? "Get Started"
                : "Upgrade Now"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PricingCards;