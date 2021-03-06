/**
 * React-Antd-Admin-Rest-Api
 * a standard restful api for project react-antd-admin
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The BillionairesRanking model module.
* @module model/BillionairesRanking
* @version 0.0.0
*/
export default class BillionairesRanking {
    /**
    * Constructs a new <code>BillionairesRanking</code>.
    * @alias module:model/BillionairesRanking
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>BillionairesRanking</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BillionairesRanking} obj Optional instance to populate.
    * @return {module:model/BillionairesRanking} The populated <code>BillionairesRanking</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillionairesRanking();

            
            
            

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('trend')) {
                obj['trend'] = ApiClient.convertToType(data['trend'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} number
    */
    number = undefined;
    /**
    * @member {module:model/BillionairesRanking.TrendEnum} trend
    */
    trend = undefined;






    /**
    * Allowed values for the <code>trend</code> property.
    * @enum {String}
    * @readonly
    */
    static TrendEnum = {
    
        /**
         * value: "increase"
         * @const
         */
        "increase": "increase",
    
        /**
         * value: "decrease"
         * @const
         */
        "decrease": "decrease",
    
        /**
         * value: "steady"
         * @const
         */
        "steady": "steady"    
    };



}


