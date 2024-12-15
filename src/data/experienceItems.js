export const experienceItems = [
  {
    date: "2024 - Present",
    label: "Internship",
    title: "Frontend Developer Intern",
    company: "StellaTech",
    content: [
      "Development of responsive interfaces adapted to different devices and screen sizes.",
      "Optimizing load time to improve user experience and web performance.",
      "Use of accessibility and usability approaches to design experiences that are both inclusive and intuitive.",
      "Implementation of SEO strategies and keyword monitoring to increase search engine visibility",
    ].map((item) => (
      <p className="mt-5 list-decimal" key={item}>{`• ${item}`}</p>
    )),
  },
].reverse();
