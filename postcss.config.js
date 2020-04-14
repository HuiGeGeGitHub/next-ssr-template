module.exports = {
    plugins:
        // process.env.NODE_ENV === "production"
        true
            ? [
                  //   require("autoprefixer")({}),
                  //   require("postcss-flexbugs-fixes"),
                  require("postcss-preset-env")({
                      autoprefixer: {
                          flexbox: "no-2009",
                          // flexbox: true,
                          grid: "autoplace",
                      },
                      stage: 3,
                  }),
              ]
            : [],
}
