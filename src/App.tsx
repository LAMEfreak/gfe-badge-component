import "./App.css";
import BadgeComponent from "./components/BadgeComponent";

function App() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-7">
        <BadgeComponent type="neutral" size="small" label="Label" />
        <BadgeComponent type="neutral" size="medium" label="Label" />
        <BadgeComponent type="neutral" size="large" label="Label" />
      </div>
      <div className="flex items-center gap-7">
        <BadgeComponent type="error" size="small" label="Label" />
        <BadgeComponent type="error" size="medium" label="Label" />
        <BadgeComponent type="error" size="large" label="Label" />
      </div>
      <div className="flex items-center gap-7">
        <BadgeComponent type="warning" size="small" label="Label" />
        <BadgeComponent type="warning" size="medium" label="Label" />
        <BadgeComponent type="warning" size="large" label="Label" />
      </div>
      <div className="flex items-center gap-7">
        <BadgeComponent type="success" size="small" label="Label" />
        <BadgeComponent type="success" size="medium" label="Label" />
        <BadgeComponent type="success" size="large" label="Label" />
      </div>
      <div className="flex items-center gap-7">
        <BadgeComponent type="brand" size="small" label="Label" />
        <BadgeComponent type="brand" size="medium" label="Label" />
        <BadgeComponent type="brand" size="large" label="Label" />
      </div>
    </div>
  );
}

export default App;
