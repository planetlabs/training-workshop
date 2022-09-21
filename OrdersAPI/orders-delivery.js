/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageCollection = ee.ImageCollection("projects/planet-earthengine-staging/assets/apple_fire"),
    imageCollection2 = ee.ImageCollection("projects/planet-earthengine-staging/assets/kunar-demo");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

//Load simple PS asset (RGB)
Map.addLayer(imageCollection2, {"opacity":1,"bands":["B3","B2","B1"],"min":405.79,"max":4499.71,"gamma":2.331})

//Load simple PS asset as False Colour (NIRGR)
//Map.addLayer(imageCollection, {"opacity":1,"bands":["B4","B2","B3"],"min":405.79,"max":4499.71,"gamma":2.331})

var listOfImages = imageCollection2.toList(imageCollection2.size());
var image = ee.Image(listOfImages.get(0));

Map.centerObject(image.geometry());

// Visualize 8 band
// Map.addLayer(imageCollection2, {"opacity":1,"bands":["B6","B4","B2"],"min":405.79,"max":4499.71,"gamma":2.331})

// NDVI
//Map.addLayer(image.normalizedDifference(['B4', 'B3']).rename('NDVI'), {min: -1, max: 1, palette: ['red', 'white', 'green']});
