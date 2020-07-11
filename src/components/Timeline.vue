<template>
  <v-timeline dense="dense">
    <v-timeline-item v-for="(job, i) in jobs" :key="i" small color="white" right="right">
      <div class="py-4">
        <p :class="`title font-weight-light mb-1 text-left`">{{job.title}}</p>
        <p :class="`subtitle-1 font-weight-light mb-3 text-left`">{{job.company}}</p>
        <p :class="`subtitle-2 font-weight-bold text-left`">{{job.year}}</p>
        <div class="text-left d-none d-sm-block">
          <span v-html="job.description"></span>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    jobs: [
      {
        title: "Full-Stack Developer",
        company: "FlexiGroup Limited (FXL)",
        year: "Apr 2018 - Present",
        description: `Designing, developing and unit testing web application, across the full application stack (C#.NET including, WebAPI, MVC, EF) <br>
                      Keeping abreast of new technologies in the web and mobile space <br>
                      Providing support for relevant areas of the system <br>
                      Website Development HTML/CSS and JavaScript/Typescript - Aurelia JS <br>
                      Automation GIT, Octopus Deploy <br>
                      Solution Design, Analysis & Documentation <br>
                      Team leading and mentoring new developers <br>
                      Redeveloping and supporting the legacy systems <br>`
      },
      {
        title: "Frontend Developer",
        company: "FlexiGroup Limited (FXL)",
        year: "Jan 2017 – Apr 2018",
        description: ``
      },
      {
        title: "Solution Developer",
        company: "Department of State Development",
        year: "Mar 2016 – Jan 2017",
        description: ``
      },
      {
        title: "Business Owner",
        company: "Prime Tech Solutions",
        year: "Jan 2012 – Feb 2016",
        description: ``
      },
      {
        title: "System Network Administrator",
        company: "ITOrbit",
        year: "Jan 2008 – Mar 2009",
        description: ``
      }
    ]
  })
};
</script>

<style>
</style>
