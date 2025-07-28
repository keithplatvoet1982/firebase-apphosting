import { app, getDateString, getRandomUUID } from "../utils";
import { getAuth, UpdateProjectConfigRequest } from "firebase-admin/auth";

console.log('Hello, ', 'Keith');

getAuth(app).projectConfigManager().getProjectConfig()
  .then((response) => {
    console.log('Project config: ', response)
  }).catch((error) => {
    console.log('Error getting project config:', error);
  });

// FIREBASE_DYNAMIC_LINK_DOMAIN

// HOSTING_DOMAIN

// const updateRequest: UpdateProjectConfigRequest = {
//   mobileLinksConfig: {
//     domain: 'FIREBASE_DYNAMIC_LINK_DOMAIN'
//   }
// }
// getAuth(app).projectConfigManager().updateProjectConfig(updateRequest)
//   .then((response) => {
//     console.log('Updated project config!');
//   }).catch((error) => {
//     console.log('Error updating the project:', error);
//   });

export default function Page() {
  const message = "Hello, Keith!";

  return (
    <main className="content">
      <h1 className="heading">SSG</h1>
      <p>{message}</p>

      <section className="data-container">
        <article className="card">
          <p>Generated</p>
          <h2>{getDateString()}</h2>
        </article>
        <article className="card">
          <p>UUID</p>
          <h2>{getRandomUUID()}</h2>
        </article>
      </section>
    </main>
  );
}
