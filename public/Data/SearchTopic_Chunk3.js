define({"220":{i:0.00107618791332621,u:"../developing_with_spryker/3rd-party_integration/billpay/integration_payment_billpay_integration.html",a:"﻿",t:"integration_payment_billpay_integration"},"221":{i:0.00107618791332621,u:"../developing_with_spryker/3rd-party_integration/billpay/integration_payment_billpay_payment_methods.html",a:"﻿",t:"integration_payment_billpay_payment_methods"},"222":{i:0.00107618791332621,u:"../developing_with_spryker/3rd-party_integration/integration_payment_braintree.html",a:"﻿",t:"integration_payment_braintree"},"223":{i:0.00107618791332621,u:"../developing_with_spryker/3rd-party_integration/integration_payment_klarna.html",a:"﻿",t:"integration_payment_klarna"},"224":{i:0.00107618791332621,u:"../developing_with_spryker/3rd-party_integration/integration_payment_payolution.html",a:"﻿",t:"integration_payment_payolution"},"225":{i:0.00717375796182836,u:"../developing_with_spryker/3rd-party_integration/integration_queue_rabbitmq.html",a:"Queues are used for managing asynchronous processing. They are ideal for handling background processes and batch imports. The default Queue management system shipped with the  DevVM is RabbitMQ.\n You can install and use any other queue handler. For information on how to work with RabbitMQ, see the  ...",t:"Queue Integration - RabbitMQ"},"226":{i:0.00113717230149813,u:"../developing_with_spryker/guidelines/developer_guidelines.html",a:"The developer Guidelines section is a collection of best practices and guidelines for developers.    To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under the same category. ...",t:"Developer Guidelines"},"227":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/search_design_paterns.html",a:" Contents: Search Design Patterns for E-Commerce: Schema Structure, Data Driven Ranking \u0026 More A Naive Product Centric Approach Usage-Driven Schema \u0026 Document Structure Generic Faceted Search Full-Text Search Multi-Term Auto Completion Simple Spelling Suggestions Data-Driven Ranking Personalization: ...",t:"On-Site Search "},"228":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/naive_product_centric_approach.html",a:"A Naive Product Centric Approach Finding products on e-commerce website can be tricky, even when you know exactly what you are looking for. Throughout this document, we will assume a customer wants to buy a hammer that weighs 2kg. A product that would meet his needs might be this “Fäustel” by ...",t:"A Naive Product-Centric Approach"},"229":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/usage_driven_schema_structure.html",a:"Both the schema and the query generator should not need to know that there is such a thing as as the weight of a hammer. We will argue for a document structure and schema design that is not built around the original data but around the usage of attributes in search operations.\n\n At Contorion, this ...",t:"Usage-Driven Schema \u0026 Document Structure"},"230":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/generic_faceted_search.html",a:"Faceted search (sometimes also called faceted navigation) allows users to navigate through a web site by applying filters for categories, attributes, price ranges and so on. It’s probably the most basic feature of a search and users expect this to work. Unfortunately, we observed that this is also ...",t:"Generic Faceted Search"},"231":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/full_text_search.html",a:"Full-text search is a feature where a user enters arbitrary text into a search field and then gets documents that are relevant for that query. It is normally combined with faceted navigation. In the example below, a user searched for “hammer” and then further filtered for hammer weights of 2000 gram ...",t:"Full-Text Search"},"232":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/multi_term_auto_completion.html",a:"Term completion is a feature where a user gets suggestions for search terms and matching search results as he types the query. We call a completion multi-term when it is able to combine terms from different attributes in an open-ended fashion. In the below example, a user entered “fortis” (a brand) ...",t:"Multi-Term Auto Completion"},"233":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/simple_spelling_suggestions.html",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},"234":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/data_driven_ranking.html",a:"When a query returns hundreds or thousands of results, it is absolutely crucial that the products at the top of the search result page are the ones that are most relevant to the user. Getting this right will lead to a higher conversion probability and increase customer happiness. Implementing proper ...",t:"Data-Driven Ranking"},"235":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/personalization_dymanic_pricing.html",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"236":{i:0.00117616239953303,u:"../developing_with_spryker/guidelines/search_design/other_best_practices.html",a:"Finally, we want to provide you with a list of some additional and potentially useful principles regarding the setup of an on-site search experience.\n \nIndex Pages, Not Products\n\n Each document we put in Elasticsearch corresponds to an URL The mapping type in our schema is called page, not product ...",t:"Other Best Practices"},"237":{i:0.00107618791332621,u:"../developing_with_spryker/guidelines/code_style_guide.html",a:"http://spryker.github.io/development-guide/reference/coding-standards/ We follow the  PSR-2 standards . To achieve a styled codebase we integrated the well known  PHP-CS Fixer  and  PHPCodeSniffer .\n Code Sniffer and Fixer \nWe ships with a very powerful tool to help keeping the code clean and ...",t:"Code Style Guide"},"238":{i:0.00199095373590499,u:"../developing_with_spryker/guidelines/secure_coding_practices.html",a:"http://spryker.github.io/development-guide/reference/secure-coding-practices/ Unsafe coding practices can make the software application vulnerable to theft of sensitive data.\n\nIn this article, we’ll present a series of coding practices that we recommend using when developing an e-commerce ...",t:"Secure Coding Practices"},"239":{i:0.00107618791332621,u:"../developing_with_spryker/developer_resources/about_resources.html",a:"This section contains general information and resources for developers. The topics covered in resources are general topics that do not pertain to a specific component or capability.   To navigate through content, click on an option from the right-hand table of contents or use the search (above).  ...",t:"About Resources"},"240":{i:0.0013048793689709,u:"../developing_with_spryker/developer_resources/code_generator.html",a:"http://spryker.github.io/development-guide/reference/code-generator/ The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client and Shared.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator ...",t:"Code Generator"},"241":{i:0.00268623079809481,u:"../developing_with_spryker/developer_resources/configuration_management.html",a:"http://spryker.github.io/development-guide/reference/configuration-management/ Default and local configuration files\n Under config/Shared you’ll find several files that are used for the system’s configuration, that can be used by both Yves and Zed.\n The files are merged in a fixed order if they ...",t:"Configuration Management"},"242":{i:0.00965449432893076,u:"../developing_with_spryker/developer_resources/console_commands.html",a:"http://spryker.github.io/development-guide/reference/console-commands/ We provide an integrated mechanism to add command line calls. Technically this is based on Symfony’s Console Component.\n\t\t \n\t\t\tGet a list of all available commands\n\t\t You can see the list of all of the commands by running: ...",t:"Console Commands"},"243":{i:0.00107618791332621,u:"../developing_with_spryker/developer_resources/container_globals.html",a:"http://spryker.github.io/development-guide/reference/container-globals/ The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something ...",t:"Container Globals"},"244":{i:0.00120686874512318,u:"../developing_with_spryker/developer_resources/core_extension.html",a:"http://spryker.github.io/development-guide/reference/container-globals/ We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, ...",t:"Core Extension"},"245":{i:0.00375900582820624,u:"../developing_with_spryker/developer_resources/cronjob_scheduling.html",a:"Used to be: http://spryker.github.io/development-guide/reference/cronjob-scheduling/ We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer ...",t:"Cronjob Scheduling"},"246":{i:0.00107618791332621,u:"../developing_with_spryker/developer_resources/dependency_injector.html",a:"http://spryker.github.io/development-guide/reference/dependency-injector/ The  Dependency Provider  defines which “external dependencies” you need to retrieve(e.g. a facade of another module).\n \nThe DependencyInjector is the opposite of it. This class will push dependencies into another module ...",t:"Dependency Injector"},"247":{i:0.00240068008700926,u:"../developing_with_spryker/developer_resources/dependency_provider.html",a:"Used to be: http://spryker.github.io/development-guide/reference/dependency-provider/ Each modules ships with a DependencyProvider class which explicitly defines services and external dependencies to other modules. For instance when the Cms module requires the Glossary module this needs to be ...",t:"Dependency Provider"},"248":{i:0.00708540373913865,u:"../developing_with_spryker/developer_resources/factory.html",a:"Used to be: http://spryker.github.io/development-guide/reference/factory/ All modules are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a ...",t:"Factory"},"249":{i:0.00107618791332621,u:"../developing_with_spryker/developer_resources/flash_messenger.html",a:"http://spryker.github.io/development-guide/reference/messenger/ This tutorial describes how to show a message in the Zed GUI.\n In the controller you can use these shortcut methods to show a user message in the GUI. The messages will be translated later when they are rendered.\n\n \u003c?php\nclass ...",t:"Flash Messenger"},"250":{i:0.00107618791332621,u:"../developing_with_spryker/developer_resources/internal_server_error_handling.html",a:"Used to be: http://spryker.github.io/development-guide/reference/handling-internal-server-error/ This document describes how to configure the behavior when an internal server error occurs. Whether you need to show the details of the error or render a static page for any internal error, this is done ...",t:"Internal Server Error Handling"},"251":{i:0.00210930773226418,u:"../developing_with_spryker/developer_resources/performance_scalability.html",a:"http://spryker.github.io/development-guide/reference/performance-and-scalability/ Spryker OS was built to enable the development of high performance e-commerce applications that are able to support an extremely high number of unique visitors. However, no application can be both, light and heavy, at ...",t:"Performance and Scalability"},"252":{i:0.00107618791332621,u:"../developing_with_spryker/developer_resources/plugin.html",a:"http://spryker.github.io/development-guide/reference/plugin/ Plugins are small classes that are used to connect bundles in a flexible and configurable way. In contrast to a direct call to a facade of another module, there can be an array of provided modules.\n\n According to our conventions, plugins ...",t:"Plugin"},"253":{i:0.00130297909818815,u:"../developing_with_spryker/developer_resources/service.html",a:"http://spryker.github.io/development-guide/reference/service/ Service is a Spryker application layer shared by the Client application layer and the Zed application layer. This service layer provides the ability to register a service once and have it applied to both layers. Usage is focused on level ...",t:"Service"},"254":{i:0.00107618791332621,u:"../developing_with_spryker/developer_resources/session_handlers.html",a:"We provide a number of session handlers to work with different storages. By default, the demo-shop uses a locking Redis session handler for Yves and a non-locking Redis session handler for Zed in the development environment.\n\n The following session handlers are currently available:\n\n File\n ...",t:"Session Handlers"},"255":{i:0.00277732062246982,u:"../developing_with_spryker/developer_resources/transfer_objects.html",a:"Used to be: http://spryker.github.io/development-guide/reference/transfer-objects/ Transfer objects are simple data containers. Their purpose is to retrieve a standardized way to access data and to get more expressive method signatures. They are available everywhere in the system. How to use ...",t:"Transfer Objects"},"256":{i:0.00226583793694327,u:"../developing_with_spryker/state_machine_cookbook/state_machine_cookbook.html",a:"Used to be: http://spryker.github.io/cookbook/state-machine/ State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},"257":{i:0.00379927781706385,u:"../developing_with_spryker/state_machine_cookbook/state_machine_cookbook_2.html",a:"Used to be: http://spryker.github.io/cookbook/state-machine/#part-ii---building-a-state-machine This chapter will help you model a state machine using Spryker to manage your sale orders.\n First of all, it’s important to know which tasks must be executed after an order is submitted and in which ...",t:"State Machine Cookbook - Part 2 -Building a State Machine"},"258":{i:0.00201315966798197,u:"../developing_with_spryker/store_administration_guide/store_administration_guide.html",a:"used to be: http://spryker.github.io/store-administration/ The  features list  will give you an overview of what the Spryker Commerce OS offers and prospective extensions that you can add in your development process. Next, user manuals for the back-office application (Zed) are offered. The manuals ...",t:"Store Administration"},"259":{i:0.00224364532943864,u:"../developing_with_spryker/store_administration_guide/bg_category.html",a:"used to be: http://spryker.github.io/store-administration/back-office-manuals/category/ A product category is a way to organize the products in your shop by the type of products you sell. The product categories can be created and update using the dedicated section in the back-office user interface. ...",t:"Category"},"260":{i:0.00129008772619256,u:"../developing_with_spryker/store_administration_guide/bg_cms.html",a:"used to be: http://spryker.github.io/store-administration/back-office-manuals/cms/ In the back-office application there is a dedicated section that enables you to create pages, blocks, as well as configuring URL redirects. Both pages and blocks use Twig templates that must be already created. To ...",t:"CMS"},"261":{i:0.00859953065105812,u:"../developing_with_spryker/store_administration_guide/bg_customer.html",a:"Customer data can be managed either by the shop owner from the back-office application (Zed) or by the customer from the shop interface (Yves). When managing customer data from the back-office application, you can add personal information like name and email address, as well as customer billing and ...",t:"Customer"},"262":{i:0.00107618791332621,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts.html",a:"used to be: http://spryker.github.io/store-administration/back-office-manuals/discounts/ In Spryker, there are two types of discounts that can be defined : Vouchers To redeem this type of discount, the customer must enter a voucher code. Similar to cart rules discount, the discount is applied only ...",t:"Discounts"},"263":{i:0.0015335708246156,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts_creating_voucher.html",a:"The creation of a voucher consists of 4 steps: Define the general information (e.g. name, validity period) Define the rules and items on which the discount should be applied Define when to apply the discount Generate the voucher codes that can be used by the customers to redeem the discount Create ...",t:"Creating a Discount Voucher"},"264":{i:0.0015335708246156,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts_creating_cart_rule.html",a:"A cart rule is a discount that is contained in the cart and needs no input from the customer. If the discount is active, valid and the cart satisfies the linked conditions, then it’s automatically calculated for the order. Creating a Cart Rule The steps for creating a cart rule are similar to the ...",t:"Creating a Cart Rule Discount"},"265":{i:0.00107618791332621,u:"../developing_with_spryker/store_administration_guide/discounts/bg_discounts_2_0.html",a:"Discounts 2.0 Delete this text and replace it with your own content.",t:"Discounts 2.0"},"266":{i:0.00224364532943864,u:"../developing_with_spryker/store_administration_guide/bg_glossary.html",a:"The translations can be handled from the back-office application from the Glossary section. A glossary consists of a glossary key (which is used in the templates contained in the shop application) a glossary value for each locale defined in the shop. Example: \t\tNext, we will help you create this ...",t:"Glossary"},"267":{i:0.00107618791332621,u:"../developing_with_spryker/store_administration_guide/bg_sales.html",a:"Sales Orders can be managed by the shop owner from the back-office application (Zed). In this document we’ll describe the functionality offered by the Sales module that will help you manage the orders submitted in your shop. Order Management System is strongly correlated with the state machines you ...",t:"Sales"},"268":{i:0.00859953065105812,u:"../developing_with_spryker/store_administration_guide/bg_shipment.html",a:"The carrier companies that you want to have integrated in the shop can be configured from the back-office UI. For each carrier company you can add one or more shipment methods that you want to enable in the shop. A carrier company refers to a company that provides shipment services (e.g.: ...",t:"Shipment"},"269":{i:0.00859953065105812,u:"../developing_with_spryker/store_administration_guide/bg_user_control.html",a:"used to be: http://spryker.github.io/store-administration/back-office-manuals/users-control/ The purpose of the users control module is to manage back-office users creation and the associated roles and assignment to groups. Create a Role Create a Group Create a User Next, we will help you create a ...",t:"User Control"},"270":{i:0.00125914107784197,u:"../developing_with_spryker/user_interface_guide/user_interface_guide.html",a:"In this section, you will find an introduction about how to build the UI for your project, when working with Spryker. The documents under this section will help you get started on designing and implementing the UI for both the front-end(Yves) and back-end(Zed) application. To navigate through ...",t:"User Interface Guide"},"271":{i:0.0107320872204252,u:"../developing_with_spryker/user_interface_guide/oryx/oryx.html",a:"As of April 2017, Oryx replaces  Antelope Introduction\n Oryx is the Spryker projects frontend helper. The purpose of Oryx is to simplify the asset building process, giving developers the freedom to choose and configure the preprocessors for the frontend.\n\n Oryx relies on webpack 2.\n\n Oryx for ZED If ...",t:"Oryx"},"272":{i:0.0107344429933435,u:"../developing_with_spryker/user_interface_guide/oryx/oryx_for_zed.html",a:"As of April 2017, Oryx replaces  Antelope Introduction\n oryx-for-zed is an extension of Oryx that performs a full build for Spryker Zed UI applications. It also provides access to Zed settings and Zed webpack configuration, so you can extend/change the whole building process.\n\n Requirements\n nodejs ...",t:"Oryx for Zed"},"273":{i:0.00107618791332621,u:"../developing_with_spryker/user_interface_guide/frontend/frontend_overview.html",a:"To learn how to build your assets in our Demoshop, read the  Demoshop Guide .\n\n Asset Management\n A set of resources used to build the UI, that includes html, css (or less, sass, stylus, etc.) and js (or jsx, etc.) files, images, fonts and so on.\n Assets are files, a large collection of files; a ...",t:"Frontend Overview"},"274":{i:0.00471814894581536,u:"../developing_with_spryker/user_interface_guide/frontend/download_structure.html",a:"Here you will find out how to download external dependencies and where to place them, together with your own asset files.\n\n This page contains references to the following tools:   Webpack ,  Oryx  (Our frontend helper tool)and Oryx for Zed (Zed\u0027s frontend full automation tool). Make sure you are ...",t:"Download and Structure"},"275":{i:0.00193989593360426,u:"../developing_with_spryker/user_interface_guide/frontend/development.html",a:"Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n \nEssentially, the code you’re going to produce can be html, css and javascript (in any of their forms: jade, sass, less, coffescript, ecma 6, react js, etc.).\n\n CommonJS\n ...",t:"Development"},"276":{i:0.00125914107784197,u:"../developing_with_spryker/user_interface_guide/frontend/build_optimization.html",a:"Build and Optimization We use  Webpack  and  Oryx  for transpiling/building the assets and to optimize the resulting output. For more on Webpack build process and requirements see: Key Concepts Getting started Using a Configuration Configuration Details Learn more about Spryker Oryx frontend helper: ...",t:"Build Optimization"},"277":{i:0.00125914107784197,u:"../developing_with_spryker/user_interface_guide/frontend/demoshop_guide.html",a:"Bootstrap the project To install all frontend the external dependecies for Yves and Zed, run in the VM console: cd /path/to/project/root ./setup -i Yves To build assets for Yves, run in the console: cd /path/to/project/root\nnpm run yves # build assets in development mode\nnpm run yves:dev # build ...",t:"Demoshop Guide"},"278":{i:0.00125914107784197,u:"../developing_with_spryker/user_interface_guide/frontend/public_folder.html",a:"To publish means to place the built assets in a place where they can be accessed and loaded by the browser.\n In the whole project, the only place with such access rights is the @project/public folder.\n\n Application Folders\n @project/public/Yves @project/public/Zed These folders contain only ...",t:"Public Folder"},"279":{i:0.00211216096443683,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_overview.html",a:"Given that we are working on a web application, we need a proper way to generate HTML dynamically. The most common approach relies on templates and for this we decided to go with Twig Template Engine.\n\n You can use other technology for the front-end of your application as well; this is just a ...",t:"Overview - Twig"},"280":{i:0.00313910766812861,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_best_practices.html",a:"include vs macros vs embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates"},"281":{i:0.0179330772039078,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Antelope is an  npm  global command line tool based upon  webpack  module bundler, designed to  build  the assets and  publish  them.\n ...",t:"Antelope Overview"},"282":{i:0.00880996077899061,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/asset_management_overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. When using the term assets,\nwe refer to a set of resources used for building UI. These resources include; html, css (or less, sass, ...",t:"Asset Management - Overview"},"283":{i:0.00818563234804044,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/build_optimization_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. We use Antelope for transpiling/building the assets and to optimize the resulting output.\n \nRead more about  antelope configuration ...",t:"Build and Optimization for Antelope"},"284":{i:0.00818563234804044,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/cli.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. Antelope is a command line interface tool available and ready for use from your terminal/console .\n\n Before you proceed with setup, read ...",t:"CLI"},"285":{i:0.00818563234804044,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/configuration.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. A configuration file is a set of properties and methods that define how to process assets.\n\n Read more about  asset build and ...",t:"Configuration"},"286":{i:0.00818563234804044,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/development_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n ...",t:"Development with Antelope"},"287":{i:0.00818563234804044,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/download_structure_antelope.html",a:"Download and Structure (Antelope) Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Here you will find out how to download external dependencies and where to place them, together with ...",t:"Download and Structure - Antelope"},"288":{i:0.00818563234804044,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/publishing.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. To publish assets means to place them (or the build output files) in a place where they can be accessed and loaded by the browser.\n ...",t:"Publishing"},"289":{i:0.00113717230149813,u:"../developing_with_spryker/yves/yves.html",a:"Front-End Yves In this section you will find the following content: Client Controllers and Actions Frontend Translations Using Redis as a KV Storage Implementing URL Routing in Yves",t:"Front-End Yves"},"290":{i:0.00198417480058736,u:"../developing_with_spryker/yves/client.html",a:"Used to be: http://spryker.github.io/development-guide/yves/reference/client/ Yves is divided into two:\n\n The part with controllers, forms, templates etc\n Client part which provides access to the search and storage engine and the Zed application.\n The purpose of the client is to encapsulate the ...",t:"Client"},});