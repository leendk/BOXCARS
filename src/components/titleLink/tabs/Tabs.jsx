function Tabs() {
  const { t } = useTranslation();
  const tabs = t("tabsComponent.items", { returnObjects: true });

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <span key={index}>{tab}</span>
      ))}
    </div>
  );
}
