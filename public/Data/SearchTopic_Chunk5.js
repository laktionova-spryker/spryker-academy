define({"343":{i:0.00116037309328226,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_checkout.html",a:"The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo - Integrate Prepayment into Checkout"},"344":{i:0.00116037309328226,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_be.html",a:"To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End"},"345":{i:0.00116037309328226,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared"},"346":{i:0.00116037309328226,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_test.html",a:"HowTo - Test Prepayment Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation"},"347":{i:0.00101638443685618,u:"../enablement/howtos/ht_product_data_import_frontend.html",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Import products to the SQL database\n Products are imported in the SQL database through the  Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"348":{i:0.00101638443685618,u:"../enablement/howtos/ht_mvp_project_structuring.html",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"349":{i:0.00677523798852958,u:"../enablement/howtos/ht_replace_bundle_dependancies.html",a:"Spryker Dependencies This content describes how to identify module dependencies and replace a dependent module with another one. Each Spryker module might have several dependent modules that provide communication, utilities and added functionality. Usually adjustments are done via our plugin ...",t:"HowTo - Replace Spryker Module Dependancies"},"350":{i:0.00161339981451313,u:"../enablement/howtos/ht_setup_hello_world_queue.html",a:"This HowTo demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"HowTo - Set Up a \"Hello World\" Queue"},"351":{i:0.00477247553192509,u:"../enablement/howtos/ht_setup_stores_mutli_store_projects.html",a:"For the case in which you must support multiple stores in your application, this can be achieved through configuration.\n\nYou can setup the stores together with their settings such as date format or currency and also you can setup the default store for your application.\n\n Configure Stores\n The stores ...",t:"HowTo - Setup Multi-Store Projects"},"352":{i:0.00101638443685618,u:"../enablement/howtos/ht_setup_stores_multiple_locals.html",a:"Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration  here .\n\n For ...",t:"HowTo - Setup Stores with Multiple Locales"},"353":{i:0.00165116143203084,u:"../enablement/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under ...",t:"Migration Guides"},"354":{i:0.00104617519335813,u:"../enablement/migration_guides/mg_availability.html",a:"Upgrading from version 3.* to version 4.*\n All Availability ui was moved to AvailabilitGui module, mostly Communication or Persistence were changed. If you have overwritten any of moved classes from those layers please change base class namespace from Availability to AvailabilityGui root.\n\n ...",t:"Migration Guide - Availability"},"355":{i:0.0071780880741934,u:"../enablement/migration_guides/mg_calculation.html",a:"Upgrading from version 3.* to version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating calculator stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"356":{i:0.00104617519335813,u:"../enablement/migration_guides/mg_catalog.html",a:"Upgrading from version 3.* to version 4.*\n Due to introducing the Suggestion Search feature, the Catalog module now requires Search \u003e=5.2.\n\n To Upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"357":{i:0.00677523798852958,u:"../enablement/migration_guides/mg_cms.html",a:"Upgrading from version 3|4.* to version 5.* CMSVersion 5.0 has new concept for showing the pages in frontend, in previous CMS versions, after creating the CMS page and running the collectors, we were be able to see the page in frontend, but now this has changed. After creating a cms page, another ...",t:"Migration Guide - CMS"},"358":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_cms_to_cms_block_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Spryker\\Zed\\CmsBlock\\Communication\\Console;\n\nuse Orm\\Zed\\Cms\\Persistence\\SpyCmsPageQuery;\nuse ...",t:"Migration Guide - CMS Block Migration Console"},"359":{i:0.00104617519335813,u:"../enablement/migration_guides/mg_collector.html",a:"Upgrading from version 3.* to version 4.* With version 4 of the Collector module, we fixed the collector:search:export and collector:search:update console commands to run for all available locales instead of just for the current one. This behavior is now consistent with the storage collector command ...",t:"Migration Guide - Collector"},"360":{i:0.00190131281588644,u:"../enablement/migration_guides/mg_customer.html",a:"  Case-insensitive schema with PostgreSQL To learn more about citex see:  https://www.postgresql.org/docs/9.1/static/citext.html . The citext module provides the case-insensitive character string type: citext. Essentially, it internally calls lower when comparing values. Otherwise, it behaves almost ...",t:"Migration Guide - Customer"},"361":{i:0.00104617519335813,u:"../enablement/migration_guides/mg_discount_calculator_connector.html",a:"Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to separate repository in spryker/calculation-migration. To learn how to migrate to new structure see,  Upgrading from version 3.* to version ...",t:"Migration Guide - DiscountCalculatorConnector"},"362":{i:0.00104617519335813,u:"../enablement/migration_guides/mg_discount_sales_aggregator_connector.html",a:"Migration Guide - DiscountSalesAggregatorConnector Upgrading from version 2.* to version 3.*\n The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.",t:"Migration Guide - DiscountSalesAggregatorConnector"},"363":{i:0.00193542946536485,u:"../enablement/migration_guides/mg_oms.html",a:"Upgrading from version 6.* to version 7.* In version 7, OMS no longer uses SalesAggregator  to calculate totals, it is now done via the Calculator module. Therefore, there is no more dependency with SalesAggregator. The Spryker\\Zed\\Oms\\Business\\Mail\\MailHandler dependency to SalesAggregatorFacade ...",t:"Migration Guide - OMS"},"364":{i:0.00226750403912197,u:"../enablement/migration_guides/mg_payment.html",a:"Upgrading from version 3.* to version 4.*\n In the  Payment  module version 4 we added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer objects\n ...",t:"Migration Guide - Payment"},"365":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_product.html",a:"Upgrading from version 2.* to version 3.*\n The Product module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .\n\n Upgrading from version 3.* to version 4.*\n 1. Database migration\n vendor/bin/console propel:diff, also manual review is necessary for the generated ...",t:"Migration Guide - Product"},"366":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_product_bundle.html",a:"Upgrading from version 2.* to version 3.*\n\n In version 3 the calculator plugin changed together with new calculator version.\n\n The ProductBundlePriceAggregatorPlugin - moved to the SalesAggregator module, so you may need to change the namespace ...",t:"Migration Guide - Product Bundle"},"367":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_product_label.html",a:"Upgrading from version 1.* to version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product label rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"368":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_product_option.html",a:"Upgrading from version 4.* to version 5.* In version 5 Product Options were updated to work with the new calculator concept. Therefore, the SalesAggregator plugin was moved to the SalesAggregator module SubtotalWithProductOptionsAggregatorPlugin. The sales option database tables received new columns ...",t:"Migration Guide - Product Option"},"369":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"370":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"371":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"372":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"373":{i:0.00297370739793693,u:"../enablement/migration_guides/mg_sales.html",a:"Upgrading from version 5.* to version 6.* There are two steps to migrating to version 6 and they should be performed in the following order: Step 1: Migrating sales_order.fk_customer, sales_order.fk_shipment_method and sales_order.shipment_delivery_time related data, to the new structure. Do not run ...",t:"Migration Guide - Sales"},"374":{i:0.00254174142865869,u:"../enablement/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"375":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_sales_aggregator_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\SalesAggregator\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - SalesAggregator Migration Console Command"},"376":{i:0.00389634789623891,u:"../enablement/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"377":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_search.html",a:"Upgrading from version 3.* to version 4.* With the version 4 of the Search module, the logic and configuration of how the results are sorted are changed. Previously there were two request parameters that controlled what field are we sorting by and what is the direction of the sort (e.g ...",t:"Migration Guide - Search"},"378":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"379":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_shipment.html",a:"Upgrading from version 4.* to version 5.* In version 5, shipment lost the direct foreign key sales.fk_shipment_method to the sales_order table, it was replaced with the spy_sales_shipment table where all shipment information is stored. A new SalesOrderHydration plugin was added to populate ...",t:"Migration Guide - Shipment"},"380":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_stepengine.html",a:"Upgrading from version 2.* to version 3.*\n \nIf you\u0027re migrating the StepEngine bundle from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine"},"381":{i:0.00803577091235536,u:"../enablement/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},"382":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_transfer.html",a:"Upgrading from version 2.* to version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer"},"383":{i:0.00101638443685618,u:"../enablement/migration_guides/mg_wishlist.html",a:"Upgrading from version 2.* to version 3.*\n If you’re migrating the Wishlist module from version 2 to version 3, you need to follow the steps described below.\n\n Version 3 of the Wishlist module introduced new schema, and old tables have to be deleted while new created.\n\n First you need to drop old ...",t:"Migration Guide - Wishlist"},"384":{i:0.00135474334136193,u:"../enablement/tutorials/tutorials.html",a:"Tutorials are instructions that describe an entire process from pointy to point including information about performing several tasks. We provide tutorials for the following: Onboarding - Tutorials that describe how to perform basic tasks Backend - Zed related tasks Frontend - Yves related tasks ...",t:"Tutorials"},"385":{i:0.00101638443685618,u:"../enablement/tutorials/backend/t_backend.html",a:"To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under the same category.  To improve readability, all long code samples and texts have been placed in collapsible areas. Use ...",t:"Backend Tutorials"},"386":{i:0.00118917082456748,u:"../enablement/tutorials/backend/t_add_navigation_zed.html",a:"This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{BundleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed"},"387":{i:0.00312799695465085,u:"../enablement/tutorials/backend/t_add_new_bundle.html",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New module"},"388":{i:0.00152544402089824,u:"../enablement/tutorials/backend/t_calculator_plugin.html",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  Calculation module. First, there are ...",t:"Tutorial - Calculator Plugin"},"389":{i:0.00101638443685618,u:"../enablement/tutorials/backend/t_console_commands.html",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"390":{i:0.00101638443685618,u:"../enablement/tutorials/backend/t_create_table_view.html",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new module ( Tutorial - Adding a New module ). Create a QueryContainer Create the QueryContainer class in the HelloWorld module: mkdir -p ...",t:"Tutorial - Creating a Table View"},"391":{i:0.00101638443685618,u:"../enablement/tutorials/backend/t_customer_import.html",a:"This tutorial describes the steps you need to follow in order to extend the Importer module functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data file In order to import customer data from a legacy system, the ...",t:"Tutorial - Customer Import"},"392":{i:0.00101638443685618,u:"../enablement/tutorials/backend/t_database_transactions.html",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"393":{i:0.00188031637541268,u:"../enablement/tutorials/backend/t_extend_db_schema.html",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"394":{i:0.00222934620393751,u:"../enablement/tutorials/backend/t_extend_spryker.html",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker. The project consists of two parts : Spryker-Core and project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"395":{i:0.00101638443685618,u:"../enablement/tutorials/backend/t_internationalization.html",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"396":{i:0.00101638443685618,u:"../enablement/tutorials/backend/t_new_relic_monitoring.html",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"397":{i:0.00101638443685618,u:"../enablement/tutorials/challenges/t_challenges.html",a:"To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under the same category.  To improve readability, all long code samples and texts have been placed in collapsible areas. Use ...",t:"Challenges"},"398":{i:0.00101638443685618,u:"../enablement/tutorials/challenges/t_boosting_cart_based_search.html",a:"Challenge Description Based on the colors of the products that are in the cart of the user, the catalog should display products first, which have the same color. Let’s say for example that there’s a red product in the cart, then the top results in the catalog also should contain red products. ...",t:"Tutorial - Boosting Cart Based Search"},"399":{i:0.00101638443685618,u:"../enablement/tutorials/challenges/t_cms.html",a:"Challenge Description Create a static Contact Us page and integrate it into Yves. Then create your own template and use it. Challenge Solving Highlights Static page For creating a static page, follow the steps: Go to Zet UI and open the  CMS Pages  backend. Add a CMS page that uses the URL ...",t:"Tutorial - CMS"},"400":{i:0.00101638443685618,u:"../enablement/tutorials/challenges/t_dynamic_content_page.html",a:"Challenge Description Create a CMS page that displays some (marketing) text and a list of personalized products as offers. Challenge Solving Highlights Static page For creating a CMS page, follow the steps: Create a CMS template called personalized_products.twig under ...",t:"Tutorial - Dynamic Content Page"},"401":{i:0.00101638443685618,u:"../enablement/tutorials/challenges/t_hello_world.html",a:"Challenge Description Build a HelloWorld module in Yves that will render the Hello world! string on the page. Manually building the HelloWorld module in Yves  Using Code Generator To save even more time, you can use code generator from development tools shipped with Spryker  Code Generator console ...",t:"Tutorial - Hello World"},"402":{i:0.00101638443685618,u:"../enablement/tutorials/challenges/t_oms_state_machine.html",a:"Challenge Description Create a simple state machine that demonstrates an order process. The simple order process has the following states: new, paid, shipped, closed, returned, and invalid. We use the invalid state in case a payment is unauthorized (could be used with some other cases as well). In ...",t:"Tutorial - OMS State Machine"},"403":{i:0.00101638443685618,u:"../enablement/tutorials/challenges/t_zed_rest_api.html",a:"Challenge Description Spryker-based shop exposes module business logic through a simple API in Zed. The API is self-documented and can be easily explored for each module. Bonus challenge Create a simple client library to authorize and talk to Zed through API. Extract the controller endpoint from Zed ...",t:"Tutorial - Zed Rest API"},"404":{i:0.00101638443685618,u:"../enablement/tutorials/frontend/t_frontend.html",a:"To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use the back/next buttons to move between items under the same category.  To improve readability, all long code samples and texts have been placed in collapsible areas. Use ...",t:"Frontend Tutorials"},"405":{i:0.00101638443685618,u:"../enablement/tutorials/frontend/t_add_button_table.html",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"406":{i:0.00101638443685618,u:"../enablement/tutorials/frontend/t_optimizing_search_boosting.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show you how to optimize the search results you get by configuring boosts. Why use boost? The search engine is one of the most important and critical ...",t:"Tutorial - Optimizing Search Results with Boosting"},"407":{i:0.00142228492237196,u:"../enablement/tutorials/frontend/t_search_.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show how to implement a simple product search using Spryker. This tutorial will not cover all aspects in detail to keep it focused. There will be links ...",t:"Tutorial - Search"},"408":{i:0.00101638443685618,u:"../enablement/tutorials/frontend/t_search_custom_setup.html",a:"There might be instances when you need to go beyond product search or you have very specific requirements regarding search. You’re not tied to the basic mapping that ships with Spryker. You can easily roll your own and set up custom analyzer very easily. The underlaying library that gets used by ...",t:"Tutorial - Search Custom Setup"},"409":{i:0.00188031637541268,u:"../enablement/tutorials/frontend/t_search_product_attributes.html",a:"There’s a built-in way to easily provide product attribute data for the search. Product attributes are stored as simple JSON encoded objects. Spryker provides a number of so called operations to be performed on these attribute objects. This article will show how to set up operations and give a brief ...",t:"Tutorial - Search Product Attributes"},"410":{i:0.00165931265910481,u:"../enablement/tutorials/frontend/t_transfer_data_yves_zed.html",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"411":{i:0.00124474853028835,u:"../enablement/tutorials/frontend/t_twig_extensions.html",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"412":{i:0.00113980328522139,u:"../enablement/tutorials/frontend/t_using_translations.html",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},});