const db = require('../config/dbConfig.js')

module.exports = {
    validatePartnerId,
    verifyPartnerData,
}


/****************************************************************************/
/*                        Verify that partner Id exists                     */
/****************************************************************************/
async function validatePartnerId(req, res, next) {
    const id = req.params.id;
    try {
        const records = await db('partners').where({id});
        if(records.length > 0)
            next();
        else {
            res.status(404).json({errorMessage: "Partner Id does  not exist"})
        }
    }
    catch {
        res.status(500).json({errorMessage: "There was a problem looking up partner id"})
    }
}

/****************************************************************************/
/*  Verify that all partner fields exist with no duplicate image filenames  */
/****************************************************************************/


async function verifyPartnerData(req, res, next) {
    const aws_link = "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/";
    const {category, name, site_url} = req.body;


    console.log(req.body);

    if(!category || !name || !site_url) {
        res.status(400).json({errorMessage: "All partner fields are required"});
    }
    
    if (!req.files || !req.files.partner_icon) {
        res.status(400).json({errorMessage: "image file is needed"});
    }

    const iconURL = aws_link + encodeURI(req.files.partner_icon.name);

    try {
        const found = await db('partners').where({icon_url:iconURL});
        if(found.length == 0) {
            next()
        }
        else {
            res.status(409).json({errorMessage: "An icon image with this filename already exists"});
        }
    }
    catch {
        res.status(500).json({errorMessage: " There is a problem checking if icon url exists in database"});
    }

}
