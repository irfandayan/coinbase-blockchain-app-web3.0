import { SanityClient } from "@sanity/client";

export const client = SanityClient({
  projectId: "7th2dg3s",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skiUmVZKBqKW8jbzkjcObjUyH004A4HzLgpNuiFce1C0DSGesGwUymax7qlZaJVgBqRr6aEnEJ7tRoqFOIvmILdtsVVdXA5fij11JeVgzM3MILmXvbHk3kGGfSKKL945rkAgUuqh2aCZVtPxtEpe2KpnULDzAKFPO4JDp5zWl0zl21QyuNZD",
  useCdn: false,
});
