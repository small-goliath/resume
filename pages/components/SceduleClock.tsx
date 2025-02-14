import React, { useEffect, useRef } from "react";

const ScheduleClock: React.FC = () => {
    const circle1Ref = useRef<HTMLDivElement>(null);
    const circle3Ref = useRef<HTMLDivElement>(null);
    const hourRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!circle1Ref.current || !circle3Ref.current || !containerRef.current) return;
        
        const date = new Date();

        function drawTicks() {
            for (let i = 0; i < 90; i++) {
                const line = document.createElement('div');
                line.classList.add('line', i % 6 === 0 ? 'thick' : 'thin');
                line.style.transform = `rotate(${2.5 * i}deg)`;
                circle1Ref.current?.appendChild(line);
            }
        }

        function drawNumbers() {
            let right = 6;
            let left = 18;

            for (let i = 0; i < 12; i++) {
                const numContainer = document.createElement('div');
                numContainer.classList.add('num-container');
                numContainer.style.transform = `rotate(${15 * i}deg)`;
                
                numContainer.innerHTML = `
                    <div class="num ${i === 0 || i === 6 ? 'highlight' : ''}" 
                         style="transform: rotate(-${15 * i}deg)">
                        ${left > 24 ? left - 24 : left}
                    </div>
                    <div class="num ${i === 0 || i === 6 ? 'highlight' : ''}" 
                         style="transform: rotate(-${15 * i}deg)">
                        ${right}
                    </div>
                `;
                circle3Ref.current?.appendChild(numContainer);
                right++;
                left++;
            }
        }

        function calculateAngles() {
            return {
                secDeg: (360 * (date.getSeconds() / 60)) + (6 * (date.getMilliseconds() / 1000)),
                minDeg: (360 * (date.getMinutes() / 60)) + (6 * (date.getSeconds() / 60)),
                hourDeg: (360 * (date.getHours() / 24)) + (15 * (date.getMinutes() / 60))
            };
        }

        function rotateAnimation(hand: HTMLElement | null, duration: number, deg: number) {
            if (hand) {
                hand.animate([
                    { transform: `rotate(${deg}deg)` },
                    { transform: `rotate(${deg + 360}deg)` }
                ], {
                    duration,
                    iterations: Infinity
                });
            }
        }

        function drawSchedule(labels: { text: string, left: string, top: string }[]) {
            labels.forEach(label => {
                const scheduleLabel = document.createElement("div");
                scheduleLabel.classList.add("schedule-label");
                scheduleLabel.style.left = label.left;
                scheduleLabel.style.top = label.top;
                scheduleLabel.innerText = label.text;
                containerRef.current?.appendChild(scheduleLabel);
            });
        }

        drawTicks();
        drawNumbers();
        const { secDeg, minDeg, hourDeg } = calculateAngles();
        rotateAnimation(hourRef.current, 43200000, hourDeg);
        rotateAnimation(minuteRef.current, 3600000, minDeg);
        rotateAnimation(secondRef.current, 60000, secDeg);

        drawSchedule([
            { text: "취침", left: "65%", top: "10%" },
            { text: "출근준비", left: "90%", top: "45%" },
            { text: "출근", left: "90%", top: "60%" },
            { text: "회사업무", left: "50%", top: "80%" },
            { text: "퇴근", left: "6%", top: "53%" },
            { text: "저녁식사", left: "-1%", top: "40%" },
            { text: "병원", left: "1%", top: "30%" },
            { text: "자기계발", left: "13%", top: "14%" }
        ]);
    }, []);

    return (
        <div className="clock-container">
                <div ref={circle1Ref} className="circle1"></div>
                <div className="circle2"></div>
                <div ref={circle3Ref} className="circle3">
                    <div className="clock-logo font1">
                        <span>small-goliath</span>
                    </div>
                    <div className="schedule-area">
                        <div ref={containerRef} className="schedule-container"></div>
                    </div>
                </div>
                <div ref={hourRef} className="hour-hand"><div className="white-space"></div></div>
                <div ref={minuteRef} className="minute-hand"><div className="white-space"></div></div>
                <div ref={secondRef} className="second-hand"></div>
                <div className="center"></div>
            </div>
    );
};

export default ScheduleClock;
