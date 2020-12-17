import db from './firebase-admin'

export async function getAllFeedback(siteId) {
  try {
    const feedback = []
    const snapshot = await db
      .collection('feedback')
      .where('siteId', '==', siteId)
      .get()

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() })
    })

    return { feedback }
  } catch (error) {
    return { error }
  }
}
