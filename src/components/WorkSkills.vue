<template>
  <div>
    <div v-for="(item, i) in items" :key="i">
      <p class="title mb-1 text-left">{{item.title}}</p>
      <div class="text-left">
        <v-chip
          v-for="(skill, i) in item.skills"
          :key="i"
          class="ma-1"
          color="light-grey"
        >{{skill.name}}</v-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
          {
          title: "Education",
          skills: [
            {
              name: "Bachelor's degree Information Technology"
            },
            {
              name: "Cert IV in Information Technology"
            }
          ]
        },
        {
          title: "Programming",
          skills: [
            {
              name: "C#"
            },
            {
              name: ".Net"
            },
            {
              name: "Vue.Js"
            },
            {
              name: "Angular"
            },
            {
              name: "Aurelia"
            },
            {
              name: "Typescript"
            },
            {
              name: "JavaScript"
            },
            {
              name: "JQuery"
            },
            {
              name: "ASP.NET"
            },
            {
              name: "MVC"
            },
            {
              name: "PHP"
            },
            {
              name: "HTML 5"
            },
            {
              name: "Sass/CSS"
            },
            {
              name: "Bootstrap"
            },
            {
              name: "Materialize CSS"
            },
            {
              name: "Vuetify.js"
            }
          ]
        },
        {
          title: "Databases",
          skills: [
            {
              name: "Microsoft SQL"
            },
            {
              name: "Oracle"
            },
            {
              name: "MySQL"
            },
            {
              name: "LINQ"
            },
            {
              name: "SSIS Packages"
            },
            {
              name: "Advanced Normalisation"
            },
            {
              name: "Unified Modelling Language (UML)"
            }
          ]
        },
        {
          title: "Enterprise",
          skills: [
            {
              name: "Deployment Automation"
            },
            {
              name: "Business Analysis"
            },
            {
              name: "Business Processes"
            },
            {
              name: "Change Management"
            },
            {
              name: "Agile Methodologies"
            },
            {
              name: "Requirement Analysis"
            }
          ]
        },
        {
          title: "Graphic",
          skills: [
            {
              name: "Photoshop"
            },
            {
              name: "Illustrator"
            },
            {
              name: "UI and UX Design"
            }
          ]
        },
        {
          title: "Personal Skills",
          skills: [
            {
              name: "Mentoring"
            },
            {
              name: "Leadership"
            },
            {
              name: "Time management"
            },
            {
              name: "Communication"
            },

            {
              name: "Presentations"
            }
          ]
        }
      ]
    };
  }
};
</script>