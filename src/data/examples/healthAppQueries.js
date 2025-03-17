/**
 * Although this project is a restaurant menu API, below are examples of how
 * similar GraphQL patterns would be applied in a health tracking context.
 *
 * These demonstrate how the same GraphQL knowledge transfers to health applications.
 */

const healthAppExamples = {
	getSymptomsByCategory: `
    query {
      symptomsByCategory(categoryId: "hormonal") {
        id
        name
        description
        possibleConditions {
          name
          severity
        }
      }
    }
  `,

	trackSymptom: `
    mutation {
      logSymptom(
        userId: "user123"
        symptomId: "headache"
        severity: 3
        timestamp: "2023-05-10T14:30:00Z"
        notes: "After eating lunch"
      ) {
        id
        timestamp
        severity
      }
    }
  `
};
