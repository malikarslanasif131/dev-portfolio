import React, { useState } from "react";
import Select from "react-select";

const options = [
  // Frontend
  { value: "react", label: "React.js" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue.js" },
  { value: "ember", label: "Ember.js" },
  { value: "svelte", label: "Svelte" },
  { value: "backbone", label: "Backbone.js" },
  { value: "jquery", label: "jQuery" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "material-ui", label: "Material-UI" },
  { value: "tailwindcss", label: "Tailwind CSS" },
  { value: "flutter", label: "Flutter" },
  { value: "ionic", label: "Ionic" },
  { value: "webpack", label: "Webpack" },
  { value: "babel", label: "Babel" },
  { value: "typescript", label: "TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "sass", label: "Sass" },
  { value: "less", label: "Less" },
  { value: "styled-components", label: "Styled Components" },
  { value: "redux", label: "Redux" },
  { value: "mobx", label: "Mobx" },
  { value: "graphql", label: "GraphQL" },
  { value: "apollo-client", label: "Apollo Client" },
  { value: "next.js", label: "Next.js" },
  { value: "gatsby", label: "Gatsby" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "d3.js", label: "D3.js" },
  { value: "three.js", label: "Three.js" },
  { value: "leaflet", label: "Leaflet" },
  { value: "ember", label: "Ember.js" },

  // Backend
  { value: "node", label: "Node.js" },
  { value: "express", label: "Express.js" },
  { value: "koa", label: "Koa.js" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "ruby-on-rails", label: "Ruby on Rails" },
  { value: "laravel", label: "Laravel" },
  { value: "spring-boot", label: "Spring Boot" },
  { value: "asp-net-core", label: "ASP.NET Core" },
  { value: "nestjs", label: "Nest.js" },
  { value: "serverless", label: "Serverless Framework" },
  { value: "strapi", label: "Strapi" },
  { value: "graphql", label: "GraphQL" },
  { value: "rest", label: "REST" },
  { value: "grpc", label: "gRPC" },
  { value: "fastify", label: "Fastify" },
  { value: "phoenix", label: "Phoenix" },

  // Databases
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "mongodb", label: "MongoDB" },
  { value: "sqlite", label: "SQLite" },
  { value: "redis", label: "Redis" },
  { value: "cassandra", label: "Cassandra" },
  { value: "neo4j", label: "Neo4j" },
  { value: "firebase", label: "Firebase" },
  { value: "oracle", label: "Oracle Database" },
  { value: "mssql", label: "Microsoft SQL Server" },

  // Android
  { value: "java-android", label: "Java (Android)" },
  { value: "kotlin-android", label: "Kotlin (Android)" },
  { value: "react-native", label: "React Native" },
  { value: "flutter", label: "Flutter" },

  // Web Development
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "perl", label: "Perl" },
  { value: "scala", label: "Scala" },
  { value: "haskell", label: "Haskell" },
  { value: "swift", label: "Swift" },
  { value: "dart", label: "Dart" },

  // Programming Languages
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "perl", label: "Perl" },
  { value: "scala", label: "Scala" },
  { value: "haskell", label: "Haskell" },
  { value: "swift", label: "Swift" },
  { value: "dart", label: "Dart" },
  { value: "r", label: "R" },
  { value: "matlab", label: "MATLAB" },
  { value: "powershell", label: "PowerShell" },
  { value: "bash", label: "Bash" },
  { value: "clojure", label: "Clojure" },
  { value: "elixir", label: "Elixir" },
  { value: "lua", label: "Lua" },
  { value: "groovy", label: "Groovy" },
  { value: "perl6", label: "Perl 6" },
  { value: "cobol", label: "COBOL" },
  { value: "fortran", label: "Fortran" },
];

const additionalOptions = [
  // Frontend
  { value: "sapper", label: "Sapper" },
  { value: "riot", label: "Riot.js" },
  { value: "preact", label: "Preact" },
  { value: "mithril", label: "Mithril" },
  { value: "quasar", label: "Quasar" },
  { value: "aurelia", label: "Aurelia" },
  { value: "nativescript", label: "NativeScript" },
  { value: "reasonml", label: "ReasonML" },

  // Backend
  { value: "feathers", label: "Feathers.js" },
  { value: "sails", label: "Sails.js" },
  { value: "ktor", label: "Ktor" },
  { value: "actix", label: "Actix" },
  { value: "vapor", label: "Vapor" },
  { value: "django-rest-framework", label: "Django Rest Framework" },

  // Databases
  { value: "couchdb", label: "CouchDB" },
  { value: "ravendb", label: "RavenDB" },
  { value: "rethinkdb", label: "RethinkDB" },
  { value: "orientdb", label: "OrientDB" },
  { value: "pouchdb", label: "PouchDB" },

  // Android
  { value: "cordova", label: "Apache Cordova" },
  { value: "xamarin", label: "Xamarin" },

  // Web Development
  { value: "dart", label: "Dart" },
  { value: "lua", label: "Lua" },
  { value: "groovy", label: "Groovy" },
  { value: "haxe", label: "Haxe" },
  { value: "perl6", label: "Perl 6" },
];

const moreOptions = [
  // Frontend
  { value: "sapper", label: "Sapper" },
  { value: "riot", label: "Riot.js" },
  { value: "preact", label: "Preact" },
  { value: "mithril", label: "Mithril" },
  { value: "quasar", label: "Quasar" },
  { value: "aurelia", label: "Aurelia" },
  { value: "nativescript", label: "NativeScript" },
  { value: "reasonml", label: "ReasonML" },
  { value: "glimmer", label: "Glimmer.js" },
  { value: "stencil", label: "Stencil" },

  // Backend
  { value: "feathers", label: "Feathers.js" },
  { value: "sails", label: "Sails.js" },
  { value: "ktor", label: "Ktor" },
  { value: "actix", label: "Actix" },
  { value: "vapor", label: "Vapor" },
  { value: "django-rest-framework", label: "Django Rest Framework" },
  { value: "fastapi", label: "FastAPI" },
  { value: "rocket", label: "Rocket" },
  { value: "warp", label: "Warp" },
  { value: "gin-gonic", label: "Gin" },

  // Databases
  { value: "couchdb", label: "CouchDB" },
  { value: "ravendb", label: "RavenDB" },
  { value: "rethinkdb", label: "RethinkDB" },
  { value: "orientdb", label: "OrientDB" },
  { value: "pouchdb", label: "PouchDB" },
  { value: "arangodb", label: "ArangoDB" },
  { value: "cosmosdb", label: "Azure Cosmos DB" },
  { value: "fauna", label: "FaunaDB" },
  { value: "dynamodb", label: "Amazon DynamoDB" },
  { value: "realm", label: "MongoDB Realm" },

  // Android
  { value: "cordova", label: "Apache Cordova" },
  { value: "xamarin", label: "Xamarin" },
  { value: "unity", label: "Unity (C#)" },
  { value: "godot", label: "Godot Engine" },
  { value: "corona-sdk", label: "Corona SDK" },
];

// Combine all options
const combinedOptions = [...options, ...additionalOptions, ...moreOptions];

export default function ReactSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
  // console.log(selectedOption);
  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={combinedOptions}
        isMulti
        className="fs-5"
        placeholder="Select technologies used in project"
      />
    </div>
  );
}
