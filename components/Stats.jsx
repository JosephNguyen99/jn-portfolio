"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 9,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 150,
    text: "Code commits",
  },
];

const Stats = () => {
    return (
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 w-full">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 justify-center xl:justify-start text-center xl:text-left">
            {stats.map((item, index) => (
              <div className="flex-1 min-w-[150px] max-w-[200px] flex flex-col items-center xl:items-start" key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className="leading-snug text-white/80 mt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
export default Stats;
