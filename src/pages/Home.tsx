import { useSession } from "@blue-express/bx-lib-universal-frontend";
import React, { useEffect, useState } from "react";
import PageTitle from "../components/Atoms/PageTitle";
import Card from "../components/Molecules/Card";
import PageLayout from "../components/PageLayout";

const Home = () => {
  const [isReadyForInstall, setIsReadyForInstall] = useState<boolean>(false);

  /* const { getSession } = useSession()
  const session = getSession()

  useEffect(() => {
    console.log( 'session from home', session )
  }, [session])
 */

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      window.deferredPrompt = event;
      setIsReadyForInstall(true);
    });
  }, []);

  const downloadApp = async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      console.error("oops, no prompt event guardado en window");
      return;
    }
    promptEvent.prompt();
    await promptEvent.userChoice;
    window.deferredPrompt = null;
    setIsReadyForInstall(false);
  };

  const goBack = () => {
    console.log("go back");
  };

  return (
    <PageLayout
      title="Bienvenido"
      description="Esto es una prueba"
      noBreadcrumb={false}
      onGoBack={goBack}
      goBackModal={false}
    >
      <PageTitle
        title="Bienvenido"
        titleSize="50px"
        subtitle="Esto es una prueba"
        subtitleClassName="display-font fw-bold fs-3"
      />
      <div className="row">
        {isReadyForInstall && (
          <div className="col-md-6">
            <Card>
              <div>
                <h1 style={{ textAlign: "center" }}> Descargar App </h1>
              </div>
              <div style={{ transform: "translateX(48%)", paddingBottom: 20 }}>
                <button onClick={downloadApp}> Descarga </button>
              </div>
            </Card>
          </div>
        )}
        <div className="col-md-6" style={{ paddingBottom: 40 }}>
          <Card>
            <div
              style={{
                textAlign: "center",
                paddingLeft: 100,
                paddingRight: 100,
                paddingBottom: 40
              }}
            >
              <h1> Contenido 1 </h1>
              <p style={{ textAlign: "center" }}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-6" style={{ paddingBottom: 40 }}>
          <Card>
            <div
              style={{
                textAlign: "center",
                paddingLeft: 100,
                paddingRight: 100,
                paddingBottom: 40
              }}
            >
              <h1 style={{ textAlign: "center" }}> Contenido 2 </h1>
              <p style={{ textAlign: "center" }}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};
export default Home;
