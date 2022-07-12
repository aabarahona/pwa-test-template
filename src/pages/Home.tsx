import React, { useEffect, useState } from "react";
import PageTitle from "../components/Atoms/PageTitle";
import Card from "../components/Molecules/Card";
import PageLayout from "../components/PageLayout";

const Home = () => {
  const [isReadyForInstall, setIsReadyForInstall] = useState<boolean>(false);

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
        <div className="col-md-6" style={{paddingBottom: 40}}>
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
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }
              </p>
            </div>
          </Card>
        </div>
        <div className="col-md-6" style={{paddingBottom: 40}}>
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
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
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
