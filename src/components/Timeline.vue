<template>
  <v-timeline dense="dense">
    <v-timeline-item v-for="(job, i) in jobs" :key="i" small right="right">
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
        company: "Certegy Ezi-Pay",
        year: "Apr 2018 - Present",
        description: `Designing, developing and unit testing web application, across the full application stack (C#.NET including, WebAPI, MVC, EF) <br>
                      Keeping abreast of new technologies in the web and mobile space <br>
                      Providing support for relevant areas of the system <br>
                      Website Development HTML/CSS and JavaScript/Typescript - Aurelia JS <br>
                      Automation GIT, Octopus Deploy <br>
                      Solution Design, Analysis & Documentation <br>
                      Redeveloping and supporting the legacy systems <br>`
      },
      {
        title: "Frontend Developer",
        company: "Certegy Ezi-Pay",
        year: "Jan 2017 – Apr 2018",
        description: `Application Development Object-Orientated C# .NET, MVC <br>
                      Website Development with Aurelia, HTML, CSS, XML, Bootstrap, JavaScript <br>
                      Solution Design, Analysis & Documentation <br>
                      Database Development with Entity Framework, LINQ <br>
                      Redeveloping and supporting the legacy systems`
      },
      {
        title: "Solution Developer",
        company: "Department of State Development",
        year: "Mar 2016 – Jan 2017",
        description: `Application Development Object-Orientated Visual C# .NET <br>
                      Website Development with Angular 2, HTML, CSS, XML, Bootstrap <br>
                      Solution Design, Analysis & Documentation <br>
                      Database Development with Entity Framework Code First, LINQ, SSIS package <br>
                      Redeveloping the legacy systems`
      },
      {
        title: "Business Owner",
        company: "Prime Tech Solutions",
        year: "Jan 2012 – Feb 2016",
        description: `Working as sole trader based on Adelaide, South Australia <br>
                      Web design & Web Development <br>
                      IT Consultation<br>
                      Server & network administration<br>
                      Assembling & Upgrade Computer systems<br>
                      Training client's staff<br>
                      Customer Support`
      },
      {
        title: "System Network Administrator",
        company: "ITOrbit",
        year: "Jan 2008 – Mar 2009",
        description: `Maintain system efficiency<br>
                      Troubleshoot problems reported by users<br>
                      Make recommendations for future upgrades<br>
                      Maintain network and system security<br>
                      Identify user needs<br>
                      Administration and monitoring servers, desktop computers, printers, routers, switches, firewalls, phones, software deployment, security updates and patches`
      }
    ]
  })
};
</script>

<style>
</style>