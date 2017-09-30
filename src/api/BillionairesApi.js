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


import ApiClient from "../ApiClient";
import InlineResponse2001 from '../model/InlineResponse2001';

/**
* Billionaires service.
* @module api/BillionairesApi
* @version 0.0.0
*/
export default class BillionairesApi {

    /**
    * Constructs a new BillionairesApi. 
    * @alias module:api/BillionairesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * list of the world&#39;s billionaires
     * get top ten billionaires in the world
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse2001>} and HTTP response
     */
    billionairesGetWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = [InlineResponse2001];

      return this.apiClient.callApi(
        '/billionaires', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * list of the world&#39;s billionaires
     * get top ten billionaires in the world
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2001>}
     */
    billionairesGet() {
      return this.billionairesGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
