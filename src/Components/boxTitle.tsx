import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { useRef, useState, useEffect } from "react";
import { CURSOR, DARKTHEME, LIGHTTHEME, LINKICON } from "./svg";
import { breakpoints, darkTheme, lightTheme } from "../theme";
import Matter from "matter-js";

const mediaTablet = `@media (max-width: ${breakpoints.tablet})`;

// const TitleWrap = styled(motion.div)`
//     ${mediaTablet} { }
// `

// const TitleBox = styled.div`padding: 0 5%; z-index: 10; position: relative; width: fit-content;
//     ${mediaTablet} { padding: 0 5vw; }
// `;
const Sub = styled.div`font-size: 23px; font-weight: 500; padding-bottom: 10px;`
const Create = styled.span`
    display: inline-block; position: relative;
    padding: 14px 20px; color: ${(props)=>props.theme.mainColor}; line-height: 1;
    background: #fff; font-weight: 600; font-size: 20px; border-radius: 50px;
`
const Cursor = styled.div`
    position: absolute; right: -25%; bottom: -50%;
    p{ font-size: 12px; color: #fff; padding: 5px 8px; background: ${(props)=>props.theme.mainColor};
        margin: -8px 0 0 15px; font-weight: 500;
    }
`
const Coffee = styled.div`color: ${(props)=>props.theme.gray4}; line-height: 1.5; margin: 30px 0 25px;`
const Mode = styled.div`cursor:pointer; display:inline-block; width: fit-content;`

// const BadgeBox = styled.div``
// const Badge = styled(motion.span)`
//     display: inline-block; position: absolute;
//     padding: 14px 20px; line-height: 1; color:  ${(props)=>props.theme.bgColor};
//     background: #292929; font-size: 20px; border-radius: 50px;
// `;

const TitleWrap = styled(motion.div)`
  position: relative;
  ${mediaTablet} { }
`;

const TitleBox = styled.div`
  padding: 0 5%;
  z-index: 10;
  position: relative;
  width: fit-content;
  ${mediaTablet} { padding: 0 5vw; }
`;

const BadgeBox = styled.div`
  position: relative;
  height: 300px;
`;
const Badge = styled(motion.span)`
  display: inline-block;
  position: absolute;
  padding: 14px 20px;
  line-height: 1;
  color: ${(props) => props.theme.bgColor};
  background: #292929;
  font-size: 20px;
  border-radius: 50px;
`;

function BoxTitle() {
    const isDark = useRecoilValue(isDarkAtom);
    const setLightAtom = useSetRecoilState(isDarkAtom);
    const toggleAtom = () => setLightAtom((prev) => !prev);
  
    const BadgeBoxRef = useRef(null);
    const [engine, setEngine] = useState<Matter.Engine | null>(null);
    const [world, setWorld] = useState<Matter.World | null>(null);
    const [bodies, setBodies] = useState<{ text: string; body: Matter.Body; id: string }[]>([]);
  
    useEffect(() => {
      const engine = Matter.Engine.create();
      const world = engine.world;
  
      // 중력 설정
      engine.world.gravity.y = 1;  // y축 방향으로 중력
  
      // 충돌 이벤트 처리 (배지들끼리 부딪힐 때 튕겨 나가도록)
      Matter.Events.on(engine, "collisionStart", (event) => {
        const pairs = event.pairs;
        pairs.forEach((pair) => {
          if (pair.bodyA.label === "badge" && pair.bodyB.label === "badge") {
            // 충돌 시 속도 반전 (튕겨 나가게)
            const bodyA = pair.bodyA;
            const bodyB = pair.bodyB;
  
            Matter.Body.setVelocity(bodyA, {
              x: -bodyA.velocity.x,
              y: -bodyA.velocity.y,
            });
            Matter.Body.setVelocity(bodyB, {
              x: -bodyB.velocity.x,
              y: -bodyB.velocity.y,
            });
          }
        });
      });
  
      // 엔진 실행
      Matter.Engine.run(engine);
  
      setEngine(engine);
      setWorld(world);
  
      return () => {
        Matter.Engine.clear(engine);
      };
    }, []);
  
    useEffect(() => {
      if (!world) return;
  
      // 배지들에 대한 Matter.js 물리 바디 생성
      const newBodies = ["Frontend Developer"].map((text, index) => {
        const radius = 40;  // 배지 크기
        const x = 100 + index * 120;  // 초기 x 위치
        const y = 100 + index * 40;  // 초기 y 위치
  
        const body = Matter.Bodies.circle(x, y, radius, {
          restitution: 0.9,  // 반발력 (튕겨 나가는 정도)
          frictionAir: 0.001,  // 공기 저항
          label: "badge",  // 배지들의 고유 라벨
          render: {
            visible: false,  // 물리 바디는 화면에 보이지 않음
          },
        });
  
        Matter.World.add(world, body);
  
        return {
          text,
          body,
          id: `badge-${index}`,  // 각 배지 고유 id
        };
      });
  
      // BadgeBox의 바닥 추가
      const floor = Matter.Bodies.rectangle(0, 500, window.innerWidth, 50, {
        isStatic: true,  // 고정된 바닥
        restitution: 0.5,  // 바닥에서 튕겨지는 정도
        render: { visible: false },
      });
  
      Matter.World.add(world, floor);
  
      setBodies(newBodies);
  
      return () => {
        newBodies.forEach(({ body }) => {
          Matter.World.remove(world, body);
        });
        Matter.World.remove(world, floor);
      };
    }, [world]);
  
    useEffect(() => {
      if (!engine || !bodies.length) return;
  
      // 배지들의 위치를 Matter.js에서 추적하여 화면에 반영
      const updateBadgePositions = () => {
        bodies.forEach(({ body, id }) => {
          const { x, y } = body.position;
          const badgeElement = document.getElementById(id);
          if (badgeElement) {
            badgeElement.style.left = `${x - 20}px`; // 중앙 정렬을 위한 보정
            badgeElement.style.top = `${y - 20}px`; // 중앙 정렬을 위한 보정
          }
        });
      };
  
      const interval = setInterval(updateBadgePositions, 1000 / 60); // 60fps로 업데이트
  
      return () => {
        clearInterval(interval);
      };
    }, [engine, bodies]);
  return (
    <>
      <TitleWrap ref={BadgeBoxRef}>
      <TitleBox>
        <div>
            <Sub>Becoming a</Sub>
            <Create>Frontend Developer
                <Cursor><CURSOR/><p>Kwons0</p></Cursor>
            </Create>
        </div>
        <Coffee>재밌게 보셨나요?<br/>저에게 흥미가 있으시다면 커피챗 해요!&nbsp;&nbsp;<LINKICON color={isDark? darkTheme.gray4 : lightTheme.gray4}/></Coffee>
        <Mode onClick={toggleAtom}>{ isDark ? <DARKTHEME/> : <LIGHTTHEME/> }</Mode>
    </TitleBox>


    <BadgeBox>
          {bodies.map(({ text, body, id }) => (
            <Badge
              key={id}
              id={id}
              drag
              dragConstraints={BadgeBoxRef}  // TitleWrap 내에서만 드래그 제한
              dragElastic={0.2}  // 드래그 탄성
              onDragStart={() => {
                Matter.Body.setVelocity(body, { x: 0, y: 0 }); // 드래그 시작 시 속도 초기화
              }}
            >
              {text}
            </Badge>
          ))}
        </BadgeBox>



      </TitleWrap>
    </>
  );
}

export default BoxTitle;
