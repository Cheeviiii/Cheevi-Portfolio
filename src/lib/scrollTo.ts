export const scrollTo = (id: string) => {
  const sectionRef = document.getElementById(id);

  if (sectionRef) {
    sectionRef.scrollIntoView({ behavior: "smooth" });
  }
};