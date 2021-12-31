const backgroundColor = "rgba(65, 184, 131, 0.5)";
const borderColor = "rgba(65, 184, 131, 1)";
const borderWidth = 3;
const label = "Skill Level";

const skills = [
  {
    category: "Languages",
    labels: ["Python", "R", "SQL", "HTML", "Javascript", "CSS"],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [5, 5, 4, 4, 3, 2],
    }],
  },
  {
    category: "Data Science Tools",
    labels: ["Tidyverse", "Tensorflow / Keras", "Scikit-Learn", "Pandas / Numpy", "Tableau", "Tidymodels"],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [5, 4, 4, 4, 4, 3],
    }],
  },
  {
    category: "ML Algorithms",
    labels: ["Linear Regression", "Logistic Regression", "Gradient Boosting", "Neural Networks", "Random Forests", "Model Ensembles"],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [4, 4, 4, 4, 4, 3],
    }],
  },
  {
    category: "Front End Frameworks",
    labels: ["Shiny (R)", "Vue", "Bootstrap", "Quasar (Vue)", ],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [5, 3, 3, 3],
    }],
  },
  {
    category: "Back End Frameworks",
    labels: ["FastAPI (Python)", "Flask (Python)", "Django (Python)", "Plumber (R)"],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [5, 3, 1, 1],
    }],
  },
  {
    category: "Databases",
    labels: ["Postgres", "MSSQL", "Oracle", "Mongo", "Elasticsearch"],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [4, 4, 3, 3, 3],
    }],
  },
  {
    category: "Ops Tools",
    labels: ["Docker", "Jenkins", "Kubernetes"],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [4, 3, 2],
    }],
  },
  {
    category: "Operating Systems",
    labels: ["Ubuntu", "Redhat"],
    datasets: [{
      label: label,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      data: [4, 3],
    }],
  },
];

export default skills;
