//list dependences
const{src, dest, watch, series} =require('gulp');
// plug-ins; see list in package.json
// const defines the variable that will be assigned to the plug-in
// require includes the name of the plug-in
const sass = require('gulp-sass')(require('sass')); //compiles sass code to css
const prefix = require('gulp-autoprefixer'); //includes required vendor prefixes in final css code
const cssnano = require('gulp-cssnano'); // compress final css code
const postcss = require('gulp-postcss'); 
const sourcemaps = require('gulp-sourcemaps'); // maps sass code to css 

// create functions
// compile scss referencing the files in the src, once compiled final css will be saved to the specified dest
function compilescss(){
  return src('scss/*.scss') // start of the pipe; the files the function will reference for the actions defined in the pipe
  // see all files ending with .scss
  
  //what the function will do with all files ending with .scss
  .pipe(sass())// run sass
  .pipe(prefix()) //add all required vendor prefixes
  .pipe(cssnano()) // compress files
  .pipe(dest('css')) // exit the pipe
  // the destination the compiled, prefixed, and compressed css should be pipped out to
  // final css will be saved to the css folder
}

//create watchtask
// run functions automatically
function watchTask(){
  watch(['scss/**/*.scss', '*.html'],compilescss); 
  // identify the files that will be watched by the function and pass the function that should be called when changes are made
  // an list of files that should be watch has been passed as the first parameter: all .scss files within the scss folder and all .html files in the project
}
//default gulp
// when 'gulp' is entered into the terminal everything listed below will run automatically
exports.default = series(
  compilescss, // compile function will be called
  watchTask // watchTask function will be called
);
  