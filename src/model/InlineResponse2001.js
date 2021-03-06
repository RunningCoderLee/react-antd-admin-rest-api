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
import BillionairesNetWorth from './BillionairesNetWorth';
import BillionairesRanking from './BillionairesRanking';





/**
* The InlineResponse2001 model module.
* @module model/InlineResponse2001
* @version 0.0.0
*/
export default class InlineResponse2001 {
    /**
    * Constructs a new <code>InlineResponse2001</code>.
    * @alias module:model/InlineResponse2001
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2001} obj Optional instance to populate.
    * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ranking')) {
                obj['ranking'] = BillionairesRanking.constructFromObject(data['ranking']);
            }
            if (data.hasOwnProperty('netWorth')) {
                obj['netWorth'] = BillionairesNetWorth.constructFromObject(data['netWorth']);
            }
            if (data.hasOwnProperty('age')) {
                obj['age'] = ApiClient.convertToType(data['age'], 'Number');
            }
            if (data.hasOwnProperty('nationality')) {
                obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
            }
            if (data.hasOwnProperty('sourceOfWealth')) {
                obj['sourceOfWealth'] = ApiClient.convertToType(data['sourceOfWealth'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {module:model/BillionairesRanking} ranking
    */
    ranking = undefined;
    /**
    * @member {module:model/BillionairesNetWorth} netWorth
    */
    netWorth = undefined;
    /**
    * @member {Number} age
    */
    age = undefined;
    /**
    * @member {String} nationality
    */
    nationality = undefined;
    /**
    * @member {String} sourceOfWealth
    */
    sourceOfWealth = undefined;








}


