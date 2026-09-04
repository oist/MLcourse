/*
 * Course content, keyed by academic year.
 *
 * TO ADD A NEW YEAR:
 *   1. Copy the most recent year's object (e.g. the "2026" block below).
 *   2. Change the key to the new year and edit any fields that changed
 *      (instructor, schedule, textbooks, grading, etc).
 *   3. Update DEFAULT_YEAR at the bottom of this file to the new year.
 * Nothing else in the site needs to change — index.html and main.js read
 * from this file and render whichever year is selected.
 */
const COURSE_DATA = {
  2026: {
    year: 2026,
    term: "Term 1",
    courseId: "B46",
    courseType: "Elective",
    credits: 2,
    instructor: "Makoto Yamada",
    meetingDays: "Mondays & Wednesdays",
    firstClass: "September 7, 2026",
    aim:
      "This course provides a practical foundation in machine learning methods for data processing, " +
      "spanning basic principles through deep learning, via hands-on coding and project-based applications.",
    outcomes: [
      "Derive standard machine learning algorithms, including least squares, logistic regression, principal component analysis (PCA), and multilayer perceptrons (MLP).",
      "Implement machine learning algorithms using Python."
    ],
    description:
      "The curriculum progresses from foundational topics — linear algebra, probability, linear regression, and " +
      "logistic regression — through advanced deep learning methods. Lectures are paired with hands-on implementation " +
      "sessions, and a student-driven project (which may make use of data from the student's own OIST unit) builds " +
      "practical application skills.",
    // Classes meet Mondays & Wednesdays, starting 2026-09-07. Topics/materials
    // below are carried over from the 2025 offering as a starting draft (see
    // scheduleNote) and are pending confirmation/reordering.
    scheduleNote:
      "Materials linked below are from the 2025 offering and will be updated for 2026. " +
      "A third final-presentation session (Mon, Dec 7) may be added if needed, as in 2025.",
    schedule: [
      { date: "2026-09-07", topic: "Introduction to Machine Learning",
        pdf: "2026/PDF/OIST-ML-Introduction.pdf",
        handson: "https://drive.google.com/file/d/1xvpdr5pSyQly-kiF1l9zDU57VYpzRjWE/view?usp=drive_link" },
      { date: "2026-09-09", topic: "Linear Algebra for ML",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2024/pdf/Linear_Algebra__OIST_v1.pdf",
        handson: "https://colab.research.google.com/drive/12CWZKf9erSJPjtnX7OV9QYA1DSoIM3qL?usp=drive_link" },

      { date: "2026-09-14", topic: "Probability and Maximum Likelihood Estimation",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2023/pdf/Probability_and_MLE_v1.pdf",
        handson: "https://colab.research.google.com/drive/1RbshKeQlhPl6beWTuHrwxEDKenGy0mpT?usp=sharing" },
      { date: "2026-09-16", topic: "Linear Regression",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2023/pdf/Linear_Regression.pdf",
        handson: "https://colab.research.google.com/drive/1qW4tndQok_zeTowF3SAXV8GlHKSF95ll?usp=sharing" },

      { date: "2026-09-21", topic: "National Holiday", detail: "Respect for the Aged Day — no class", holiday: true },
      { date: "2026-09-23", topic: "National Holiday", detail: "Autumnal Equinox Day — no class", holiday: true },

      { date: "2026-09-28", topic: "Classification",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2023/pdf/Classification_OIST.pdf",
        handson: "https://colab.research.google.com/drive/1-mFNWnewrnxUQUqNr0Hqf9rU0Ls3B0S1?usp=sharing" },
      { date: "2026-09-30", topic: "Nonlinear Regression",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2023/pdf/Nonlinear_Regression.pdf",
        handson: "https://colab.research.google.com/drive/1e00R-JlVVe-UfBsfxPIu750EcuY-1t51?usp=sharing" },

      { date: "2026-10-05", topic: "Midterm Exam" },
      { date: "2026-10-07", topic: "Review of Midterm Exam" },

      { date: "2026-10-12", topic: "National Holiday", detail: "Sports Day — no class", holiday: true },
      { date: "2026-10-14", topic: "Feature Selection and Sparsity",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2023/pdf/Feature_Selection_and_Sparsity.pdf",
        handson: "https://colab.research.google.com/drive/1bPn-vJ3nPY6n8csoqzB_tt_Ma1Lg2bzL?usp=sharing" },

      { date: "2026-10-19", topic: "Dimensionality Reduction", detail: "PCA, CCA, t-SNE",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2023/pdf/Dimensionality_reduction.pdf",
        handson: "https://colab.research.google.com/drive/18ZaqKkhnNt7b9ViAb5JmMrGGralPDH96?usp=sharing" },
      { date: "2026-10-21", topic: "Introduction to Deep Learning",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2023/pdf/Introduction_DL.pdf",
        handson: "https://colab.research.google.com/drive/1dmSfz8WqCOJ2LZUkUMSZy_jlU0nmyO8i?usp=sharing" },

      { date: "2026-10-26", topic: "No Class", detail: "No class this week", holiday: true },
      { date: "2026-10-28", topic: "No Class", detail: "No class this week", holiday: true },

      { date: "2026-11-02", topic: "Introduction to Graph Neural Networks",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2024/pdf/Graph_Neural_Network_IML.pdf",
        handson: "https://colab.research.google.com/drive/1jB_nJrAu5W_lV7l--ZDajJQtm1dNLHdq?usp=sharing" },
      { date: "2026-11-04", topic: "Introduction to Self-Supervised Learning",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2024/pdf/Self_supervised_Learning.pdf" },

      { date: "2026-11-09", topic: "Introduction to Optimal Transport",
        pdf: "https://groups.oist.jp/sites/default/files/imce/u129210/IML/2024/pdf/Optimal_Transport.pdf" },
      { date: "2026-11-11", topic: "Project 1" },

      { date: "2026-11-16", topic: "Project 2" },
      { date: "2026-11-18", topic: "Project 3" },

      { date: "2026-11-23", topic: "National Holiday", detail: "Labor Thanksgiving Day — no class", holiday: true },
      { date: "2026-11-25", topic: "Project 4" },

      { date: "2026-11-30", topic: "Final Presentation 1" },
      { date: "2026-12-02", topic: "Final Presentation 2" }
    ],
    assessment: {
      breakdown: [
        { label: "Midterm exam", weight: "30%" },
        { label: "Project", weight: "70%" }
      ],
      grading: [
        { range: "85–100", grade: "A" },
        { range: "75–84", grade: "B" },
        { range: "60–74", grade: "C" },
        { range: "< 60", grade: "F" }
      ]
    },
    prerequisites:
      "None formally required. No prior background in mathematics or programming is assumed, although familiarity " +
      "with both is helpful for fully engaging with the more advanced topics (e.g. deep learning).",
    textbooks: [
      "Mathematics for Machine Learning — Deisenroth, Faisal, Ong",
      "Pattern Recognition and Machine Learning — Christopher Bishop",
      "Deep Learning — Goodfellow, Bengio, Courville",
      "Foundations of Machine Learning — Mohri, Rostamizadeh, Talwalkar"
    ],
    specialties: ["Computer Science", "Machine Learning", "Mathematics"]
  }
};

const DEFAULT_YEAR = 2026;
