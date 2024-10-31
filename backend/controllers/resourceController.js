// controllers/resourceController.js

export const getGeneralResources = (req, res) => {
  res.json([
    {
      title: "GRE Complete Prep (Udemy)",
      link: "https://wgu.udemy.com/course/subeezy-gre/"
    }
  ]);
};

export const getVerbalResources = (req, res) => {
  res.json([
    {
      title: "Verbal Reasoning Playlist (Youtube)",
      link: "https://www.youtube.com/playlist?list=PLJPNtAojgc_CWFfDARe7aF2NCNrP2FeRb"
    }
  ]);
};

export const getQuantitativeResources = (req, res) => {
  res.json([
    {
      title: "Quantitative Reasoning Playlist (Youtube)",
      link: "https://www.youtube.com/watch?v=xS5LAfeP3Sg&list=PLGB8vOgYKbRFnSCKvh6cWX0111RK39Zy1"
    }
  ]);
};

export const getWritingResources = (req, res) => {
    res.json([
      {
        title: "Analytical Writing Playlist (Youtube)",
        link: "https://www.youtube.com/watch?v=06tAx55rtfw&list=PLGB8vOgYKbRHvN-AJBQfavh8joUkCvdHK"
      }
    ]);
  };