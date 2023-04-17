sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , MessageBox) {
        "use strict";

        return Controller.extend("assignment1.controller.View1", {
            onInit: function () {

            },
            onListItemPress1: function () {
                MessageBox.show("Product Name :" + this.getView().byId("laptop").getTitle() + "\n" +
                 "Price : " + this.getView().byId("laptop").getNumber(),{
                    title: "Product Information"  
                 }
                 );
            },
            
            onListItemPress2: function () {
                MessageBox.show("Product Name :" + this.getView().byId("laptop1").getTitle() + "\n" +
                 "Price : " + this.getView().byId("laptop1").getNumber(),{
                    title: "Product Information"  
                 }
                 );
            },

            onListItemPress3: function () {
                MessageBox.show("Product Name :" + this.getView().byId("laptop2").getTitle() + "\n" +
                 "Price : " + this.getView().byId("laptop2").getNumber(),{
                    title: "Product Information"  
                 }
                 );
            }
        });
    });
