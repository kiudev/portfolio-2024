export const experienceItems = [
  {
    date: "2024 - Present",
    label: "Internship",
    title: "Web Developer",
    company: "StellaTech",
    content: [
      "Website design and optimization with Wordpress and Elementor",
      "Implementation of SEO strategies to boost visibility in search engines",
      "Keyword tracking and ranking results analysis with SE Ranking",
      "Identify areas of improvement to adjust and improve the appearance and performance of the website",
    ].map(item => (
      <p className="mt-5 list-decimal" key={item}>{`- ${item}`}</p>
    )),
  },
].reverse();
