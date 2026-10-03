import { businessProfile } from "@/data/businessProfile";
const sources = [
  [
    "BIS — lift safety rules, IS 17900 (Part 1):2022",
    "https://standards.bis.gov.in/website/standard-details?encryptedId=eyJpdiI6IktKUlkrZUkyN3ZTdkdzUXRUcElnT1E9PSIsInZhbHVlIjoiRTFqZmNhc0hKTW1Uc3JvcCtheUROQT09IiwibWFjIjoiYWQ1Yzk1MzNmNGM1MjZmNmZjODE5ZDU1OGQ1YjEzYmRhNDJmYjg5OWE1MzEyNWFlYTNiMjZlMWFlMjNiNzIyYyIsInRhZyI6IiJ9",
  ],
  [
    "BIS — National Building Code of India",
    "https://www.bis.gov.in/standards/national-building-code/?lang=en",
  ],
  [
    "Central Electricity Authority — electrical safety",
    "https://cea.nic.in/about-cei/?lang=en",
  ],
];
export default function ArticleTrustPanel() {
  return (
    <aside
      className="article-trust-panel"
      aria-label="Editorial and technical information"
    >
      <div>
        <strong>Technical review</strong>
        <span>{businessProfile.technicalReviewer}</span>
      </div>
      <div>
        <strong>Service area</strong>
        <span>{businessProfile.serviceArea}</span>
      </div>
      <div>
        <strong>Official references</strong>
        <ul>
          {sources.map(([label, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p>
        Requirements vary by site and authority. Confirm current standards and
        approvals for each project.
      </p>
    </aside>
  );
}
