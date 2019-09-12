<template>
  <v-timeline>
    <v-timeline-item v-for="(job, i) in jobs" :key="i" small right="right">
      <template v-slot:opposite>
        <span :class="`font-weight-bold`" v-text="job.year"></span>
      </template>
      <div class="py-4">
        <p :class="`title font-weight-light mb-1 text-left`">{{job.title}}</p>
        <p :class="`subtitle-1 font-weight-light mb-3 text-left`">{{job.company}}</p>
        <div class="text-left">
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
        description: `Application Development Object-Orientated C# .NET, MVC <br>
                      Website Development with Aurelia, HTML, CSS, Materialize, Bootstrap, JavaScript <br>
                      Solution Design, Analysis & Documentation <br>
                      Database Development with Entity Framework, LINQ <br>
                      Redeveloping and supporting the legacy systems`
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