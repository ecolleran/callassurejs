// StorySection.tsx
import styles from './StorySection.module.css'; // Import module CSS

function StorySection() {
  return (
    <div className={styles.ourStoryPage}>
      <section className={styles.storySection}>
        <div className={styles.imageColumn}>
          <img src="/about-us.png" alt="Joe & Emily with their grandma in Cape Cod" className={styles.storyImage} />
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.storyTitle}>Our Story</h2>
          <p className={styles.storyText}>
            CallAssure was inspired by my grandma who lives on Cape Cod in Chatham. Since her town is small and has a high percentage of elderly residents, the Chatham Police Department created a "reassurance program." They wait for participants to call them each morning, then manually call residents or visit their homes if they receive no response. Unfortunately, this model doesn't scale well to any decently sized city with a busy police or EMS force. It is time consuming and costly to have a phone operator working all morning. And so, CallAssure was born!
          </p>
          <p className={styles.storyText}>
            Created by William, Emily and Joe Colleran, CallAssure leverages cutting-edge technology and compassionate care to help families stay connected and worry-free.
          </p>
        </div>
        {/* <div className={styles.imageColumn}>
          <img src="/about-us.png" alt="Joe & Emily with their grandma in Cape Cod" className={styles.storyImage} />
        </div> */}
      </section>
    </div>
  );
}

export default StorySection;