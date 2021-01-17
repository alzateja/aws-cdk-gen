import { templatePath, s3CDKPath } from "../constants";

const s3BucketGenerator = (plop) => {
  plop.setGenerator("Create an S3 Bucket", {
    description: "Basic S3 Bucket construct.",
    prompts: [
      {
        type: "input",
        name: "s3",
        message:
          'What is the name of your S3 bucket? You can use spaces like "my test" when naming your bucket.',
      },
    ],
    actions: [
      "We will now attempt to create an S3 bucket construct.",
      {
        type: "add",
        path: s3CDKPath + "{{dashCase s3}}-bucket.ts",
        templateFile: templatePath + "/s3-bucket/s3-bucket.hbs",
      },
      "Successfully created an S3 bucket!",
    ],
  });
};

export default s3BucketGenerator;
