
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('partners')
  //   .truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {category: 'partner', name: 'USC', site_url:'www.usc.edu', icon_url: "https://miracle-messages2-images.s3.us-east-2.amazonaws.com/purple-nebula-4k-lu-2560x1440.jpg"},

        // {category: 'partner', name: 'Mt Tabor LA', site_url:'http://mttaborla.org', icon_url: "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/Mt_Tabor_Missionary_Baptist_Church_-_Baptist_SBC_church_Los_.jpg"},

        // {category: 'partner', name: 'St Vincent De Paul Los Angeles', site_url: "https://svdpla.org/", icon_url: "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/Homepage_for_St._Vincent_de_Paul_of_Los_Angeles_Religious_.png" },
        // {category: 'partner', name: 'City of Riverside', site_url:  "https://www.riversideca.gov", icon_url:  "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/FileSeal_of_Riverside_California.png_-_" },
        // {category: 'sponsor', name: 'AT&T', site_url: "https://www.att.com/local/california/san-francisco", icon_url: "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/att-logo.png"},
        // {category: 'partner', name: 'DSCS', site_url: "https://www.dscs.org/", icon_url: "https://labs14-miracle-messages-image-upload.s3.amazonaws.com/DSCS.jpg"},  
      ]);
    // });
};
