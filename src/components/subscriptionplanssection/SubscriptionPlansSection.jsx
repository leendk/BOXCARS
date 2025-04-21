import React, { useState } from "react";
import "./SubscriptionPlansSection.css";
const SubscriptionPlans = () => {
  // تعريف الحالة الخاصة بالخطة النشطة
  const [activePlan, setActivePlan] = useState(null);

  // تعريف الخطط المتاحة
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Display 1 or 2 cars", "Limited Duration (One week)"],
    },
    {
      name: "Basic",
      price: "$10",
      features: ["Display 1–3 cars", "Low cost"],
    },
    {
      name: "Premium",
      price: "$30",
      features: ["Display 4–10 cars", "Faster support"],
    },
    {
      name: "Professional",
      price: "$45",
      features: ["Unlimited car display", "Best features & support"],
    },
  ];

  // تغيير الخطة النشطة عند النقر
  const handlePlanClick = (planName) => {
    setActivePlan(planName);
  };

  return (
    <section className="subscription-plans" id="Subscription">
      <h1>Subscription Plans</h1>

      <div className="controls">
        <span className="pill">Payment Method</span>
        <select id="payment">
          <option>Syriatel Cash</option>
          <option>MTN</option>
          <option>Bank Account</option>
        </select>
        <span className="pill">Subscription Duration</span>
        <select id="duration">
          <option>Daily</option>
          <option>Weekly</option>
          <option selected>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="plans-wrapper">
        <div className="plans">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan ${activePlan === plan.name ? "active" : ""}`}
              onClick={() => handlePlanClick(plan.name)}
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
              <button className="btn">Start Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
