/**
 * Stop recording command.
 */

const wsContentTypes = require('../api/wsContentTypes');
const chainPromise = require('../utils/chainPromise');
const {stopRecordingMessage} = require('../texts');

/**
 * Stop recording
 * @param {Object} instance of main class
 * @returns {ChainablePromise.<void>}
 */
async function stopRecording({webSockets, authContext, logger}, webhookUrl = '') {
	// authorize
	const authedContent = await authContext.authorizeWs({type: wsContentTypes.stopRecording}, webhookUrl);

	// make ws request
	await webSockets.send(authedContent);

	logger.log(stopRecordingMessage());
}

module.exports = chainPromise(stopRecording);
