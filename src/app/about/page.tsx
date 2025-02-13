'use client';

import Image from 'next/image';
import styles from './About.module.scss';

export default function AboutSection() {
  return (
    <section className={`${styles.architecture}`} id="about">
      {/* Logo-Wrapper */}
      <div className={styles.logoWrapper}>
        <Image
          src="/assets/logo_black.png"
          alt="Logo von Jacob Mau"
          width={100}
          height={100}
          className={styles.logoImage}
        />
        <span className={styles.companyDescription}>Profil</span>
      </div>

      {/* Image-Wrapper */}
      <div className={styles.imgWrapper}>
        <span className={styles.descriptionBio}>
          alle müssen wohnen & jeder ort ist anders. <br />
          mit den individuellen anforderungen der auftraggebenden und den
          <br />
          spezifischen gegebenheiten des jeweiligen ortes zeitgemäße <br />
          architektur zu gestalten, habe ich mir zur aufgabe gemacht.
        </span>
        <Image
          src="/assets/profile.png"
          alt="Profilbild von Jacob Mau"
          width={400}
          height={400}
          className={styles.profileImage}
        />
      </div>

      {/* Wrapper-Content */}
      <div className={styles.wrapperContent}>
        <div className={`${styles.educationRow} ${styles.animate}`}>
          <div className={styles.educationColumn}>
            <div className={styles.educationBox}>
              {/* Bildungs- und Berufserfahrung */}
              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>2023 Eintragung in die Liste der Energieeffizienz-Experten</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>2022 Bauvorlageberechtigt</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>seit 2021 Selbstständig als Architekt</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>2018 Master Studium Architektur, Beuth Hochschule Berlin</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>
                    2016 - 2021 Mitarbeiter koopX architekten, Berlin, LPH 1- 8 (bis
                    2018 als Werkstudent)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
