/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 *
 */

module.exports = {
  mqtt: {
    pubsubCollection: 'ascoltatori',
    redis: {},
    wsServer: {
      enabled: true,
      port: 3000
    }
  },
  forecast: {
    // replace with your own apiKey from https://darksky.net/dev/register
    apiKey: 'ef6bcd270f344238afe201820220101',
    url: 'api.weatherapi.com'
  }
}
