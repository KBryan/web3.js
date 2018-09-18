/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file AbstractMethodModel.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

"use strict";

/**
 * @param {String|Function} rpcMethod
 * @param {Number} parametersAmount
 * @param {Array} inputFormatters
 * @param {Function} outputFormatter
 *
 * @constructor
 */
function AbstractMethodModel(rpcMethod, parametersAmount, inputFormatters, outputFormatter) {
    this.rpcMethod = rpcMethod;
    this.parametersAmount = parametersAmount;
    this.inputFormatters = inputFormatters;
    this.outputFormatter = outputFormatter;
}

/**
 * Returns the given function arguments and the current model
 *
 * @method request
 *
 * @returns {Object}
 */
AbstractMethodModel.prototype.request = function () {
    return {
        methodModel: this,
        parameters: arguments
    }
};

/**
 * Determines if the JSON-RPC method is sign.
 *
 * @method isSign
 *
 * @returns {boolean}
 */
AbstractMethodModel.prototype.isSign = function () {
    return this.rpcMethod === 'eth_sign';
};

/**
 * Determines if the JSON-RPC method is sendTransaction
 *
 * @method isSendTransaction
 *
 * @returns {boolean}
 */
AbstractMethodModel.prototype.isSendTransaction = function () {
    return this.rpcMethod === 'eth_sendTransaction';
};

/**
 * Determines if the JSON-RPC method is sendRawTransaction
 *
 * @method isSendRawTransaction
 *
 * @returns {boolean}
 */
AbstractMethodModel.prototype.isSendRawTransaction = function () {
    return this.rpcMethod === 'eth_sendRawTransaction';
};

/**
 * Checks if the given parameter is of type hash
 *
 * @method isHash
 *
 * @param {any} parameter
 *
 * @returns {boolean}
 */
AbstractMethodModel.prototype.isHash = function (parameter) {
    return _.isString(parameter) && parameter.indexOf('0x') === 0
};


module.exports = AbstractMethodModel;
