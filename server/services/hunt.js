const Team = require('./team')

class Hunt {
	constructor(huntData) {
		this.qr_location_offset = huntData.qr_location_offset
		this.qrs = huntData.qrs

		this.final_qr_index = 0
		huntData.qrs.forEach((qr) => {
			if (qr.index > this.final_qr_index) {
				this.final_qr_index = qr.index
			}
		})
	}

	async getQRIndex(qrID) {}

	async getConstraints(qrID, teamID) {}
}
