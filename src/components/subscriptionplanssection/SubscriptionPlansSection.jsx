import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SubscriptionPlansSection.css";

const SubscriptionPlans = () => {
  const { t } = useTranslation();
  const [activePlan, setActivePlan] = useState(null);

  const plans = [
    {
      key: "free",
      name: t("subscriptionPlans.plans.free.name"),
      price: t("subscriptionPlans.plans.free.price"),
      features: t("subscriptionPlans.plans.free.features", { returnObjects: true }),
    },
    {
      key: "basic",
      name: t("subscriptionPlans.plans.basic.name"),
      price: t("subscriptionPlans.plans.basic.price"),
      features: t("subscriptionPlans.plans.basic.features", { returnObjects: true }),
    },
    {
      key: "premium",
      name: t("subscriptionPlans.plans.premium.name"),
      price: t("subscriptionPlans.plans.premium.price"),
      features: t("subscriptionPlans.plans.premium.features", { returnObjects: true }),
    },
    {
      key: "professional",
      name: t("subscriptionPlans.plans.professional.name"),
      price: t("subscriptionPlans.plans.professional.price"),
      features: t("subscriptionPlans.plans.professional.features", { returnObjects: true }),
    },
  ];

  const handlePlanClick = (planKey) => {
    setActivePlan(planKey);
  };

  return (
    <section className="subscription-plans" id="Subscription">
      <h1>{t("subscriptionPlans.title")}</h1>

      <div className="controls">
        <span className="pill">{t("subscriptionPlans.controls.paymentMethod")}</span>
        <select id="payment">
          {t("subscriptionPlans.controls.options", { returnObjects: true }).map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>

        <span className="pill">{t("subscriptionPlans.controls.duration")}</span>
        <select id="duration">
          {t("subscriptionPlans.controls.durations", { returnObjects: true }).map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>

      <div className="plans-wrapper">
        <div className="plans">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`plan ${activePlan === plan.key ? "active" : ""}`}
              onClick={() => handlePlanClick(plan.key)}
            >
              <h2>{plan.name}</h2>
              <div className="price">{plan.price}</div>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-car"></i> {feature}
                  </li>
                ))}
              </ul>
              <button className="btn">{t("subscriptionPlans.plans.button")}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
