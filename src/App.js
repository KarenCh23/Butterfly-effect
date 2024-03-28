import "./App.css";
import { ScrollControls, Scroll, Environment, Float } from "@react-three/drei";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Butterfly } from "./models/Butterfly";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";

function App() {
  return (
    <>
      {/* Background color + light ambiance */}
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={1}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />

      {/* Effects on Butterflies elements */}
      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          height={1000}
        />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={5}
          height={400}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      {/* Scroll Butterflies */}
      <ScrollControls pages={6} damping={0.25}>
        <Scroll>
          {/* Top Butterflies */}
          <Float
            speed={1} // Animation speed, default to 1
            rotationIntensity={2} // XYZ rotation intensity
            floatIntensity={0.2} // Up Down float intensity
            floatingRange={[1, 1]} // Range of y-axis values the object will float within
          >
            <Butterfly
              key={"butterfly_1"}
              scale={0.05}
              position={[-10, -3, -6]}
            />
            <Butterfly
              key={"butterfly_2"}
              scale={0.05}
              position={[0, -2.5, 0]}
            />
            <Butterfly
              key={"butterfly_3"}
              scale={0.05}
              position={[10, -4, -10]}
            />
          </Float>

          {/* Middle Butterflies */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly
              key={"butterfly_4"}
              scale={0.05}
              position={[-1, -12.5, 0]}
            />
            <Butterfly
              key={"butterfly_5"}
              scale={0.05}
              position={[12, -14, -10]}
            />
          </Float>

          {/* Bottom Butterflies 1 */}
          <Float
            speed={1}
            rotationIntensity={2}
            floatIntensity={0.2}
            floatingRange={[1, 1]}
          >
            <Butterfly
              key={"butterfly_6"}
              scale={0.05}
              position={[-3, -19.5, 2]}
            />
            <Butterfly
              key={"butterfly_7"}
              scale={0.05}
              position={[8, -23, -10]}
            />
            <Butterfly
              key={"butterfly_8"}
              scale={0.05}
              position={[4, -24, 2]}
            />
          </Float>
          {/* Bottom Butterflies 2 */}
          <Float
            speed={1}
            rotationIntensity={0.5}
            floatIntensity={0.1}
            floatingRange={[2, 2]}
          >
            <Butterfly
              key={"butterfly_7"}
              scale={0.05}
              position={[15, -30, -40]}
            />
            <Butterfly
              key={"butterfly_8"}
              scale={0.1}
              position={[-10, -60, -40]}
            />
          </Float>
        </Scroll>

        {/* Scroll Text */}
        <Scroll html style={{ width: "100%" }}>
          <Container style={{ height: "100px", position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    Life can be a struggle
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    Sometimes you can feel
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    Lost
                  </h1>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    Overwhelmed
                  </h1>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    Empty inside
                  </h1>
                </div>
              </Col>
            </Row>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "300vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    Do you know the <br /> Butterfly effect ?
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "400vh",
              }}
            >
              <Col xs={8}>
                <div>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    One little step can <br />
                    change everything
                  </h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px 0px",
                top: "500vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 className="scroll-text" style={{ marginBottom: "0px" }}>
                    It's time to get
                    <br /> the support you need
                  </h1>
                  <h2
                    className="scroll-text"
                    style={{ marginBottom: "30px", marginTop: "-20px" }}
                  >
                    To get your life back
                  </h2>
                  <Button variant="outline-light" size="lg">
                    Get the App
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
