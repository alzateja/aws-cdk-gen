import fs from "fs-extra";
import path from "path";

const actions = (plop) => {
  plop.setDefaultInclude({ actionTypes: true });

  plop.setActionType("copy", (answers, config, plop) => {
    const src = plop.renderString(config.src, answers);
    const dest = plop.renderString(config.dest, answers);
    const dirname = path.dirname(dest);

    console.log(dest);
    console.log(dirname);
    fs.mkdirSync(dirname, { recursive: true });
    fs.copyFileSync(src, dest);
  });

  plop.setActionType("copyDir", (answers, config, plop) => {
    const src = plop.renderString(config.src, answers);
    const dest = plop.renderString(config.dest, answers);
    const dirname = path.dirname(dest);
    console.log(dirname);
    console.log(dest);

    fs.mkdirSync(dirname, { recursive: true });
    fs.copySync(src, dirname);
  });
};

export default actions;
