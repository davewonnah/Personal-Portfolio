import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { resume } from "@/data/resume";

/**
 * The downloadable résumé, built as a real (vector, selectable-text) PDF with
 * @react-pdf/renderer. It mirrors the /resume web page using the built-in
 * Times/Helvetica families so no font files need to be fetched.
 */

const ink = "#211d18";
const accent = "#c2410c";
const muted = "#6f6557";
const border = "#e3dccd";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: ink,
    lineHeight: 1.45,
  },
  header: { marginBottom: 4 },
  name: { fontFamily: "Times-Bold", fontSize: 26, color: ink, lineHeight: 1.1 },
  title: { fontSize: 11, color: accent, marginTop: 5, lineHeight: 1.2 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10, gap: 12 },
  contact: { fontSize: 9, color: muted },
  headerRule: { height: 1, backgroundColor: border, marginTop: 12 },
  summary: { marginTop: 12, fontSize: 10, color: ink, lineHeight: 1.5 },

  body: { flexDirection: "row", marginTop: 18, gap: 26 },
  main: { width: "62%" },
  aside: { width: "38%" },

  section: { marginBottom: 16 },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.5,
    letterSpacing: 1.4,
    color: muted,
    textTransform: "uppercase",
  },
  sectionRule: { height: 1, width: 26, backgroundColor: accent, marginTop: 4, marginBottom: 8 },

  jobBlock: { marginBottom: 11 },
  jobHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  role: { fontFamily: "Times-Bold", fontSize: 11.5, color: ink },
  period: { fontFamily: "Courier", fontSize: 8, color: muted },
  company: { fontSize: 9.5, color: accent, marginTop: 1 },

  bulletRow: { flexDirection: "row", marginTop: 3.5 },
  bulletDash: {
    width: 7,
    height: 1,
    backgroundColor: accent,
    marginTop: 5,
    marginRight: 6,
  },
  bulletText: { flex: 1, fontSize: 9, color: muted, lineHeight: 1.45 },

  credTitle: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: ink },
  credDetail: { fontSize: 8.5, color: muted },
  credBlock: { marginBottom: 8 },

  skillWrap: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  skillChip: {
    fontSize: 8,
    color: ink,
    lineHeight: 1,
    textAlign: "center",
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    paddingTop: 3.5,
    paddingBottom: 3,
    paddingHorizontal: 7,
  },

  compRow: { flexDirection: "row", marginTop: 3 },
  refBlock: { marginBottom: 7 },
  refName: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: ink },
  refRole: { fontSize: 8.5, color: muted },
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionRule} />
      {children}
    </View>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow}>
      <View style={styles.bulletDash} />
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export function ResumeDocument() {
  const { contact } = resume;
  return (
    <Document title={`${resume.name} — Résumé`} author={resume.name}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.title}>{resume.title}</Text>
        </View>
        <View style={styles.contactRow}>
          <Link src={`tel:${contact.phone.replace(/\s/g, "")}`} style={styles.contact}>
            {contact.phone}
          </Link>
          <Link src={`mailto:${contact.email}`} style={styles.contact}>
            {contact.email}
          </Link>
          <Link src={contact.githubUrl} style={styles.contact}>
            {contact.github}
          </Link>
        </View>
        <View style={styles.headerRule} />

        {/* Summary */}
        <Text style={styles.summary}>{resume.summary}</Text>

        {/* Body */}
        <View style={styles.body}>
          {/* Main column */}
          <View style={styles.main}>
            <Section title="Experience">
              {resume.experience.map((job) => (
                <View key={`${job.company}-${job.role}`} style={styles.jobBlock} wrap={false}>
                  <View style={styles.jobHeader}>
                    <Text style={styles.role}>{job.role}</Text>
                    <Text style={styles.period}>{job.period}</Text>
                  </View>
                  <Text style={styles.company}>{job.company}</Text>
                  {job.points.map((point, i) => (
                    <Bullet key={i}>{point}</Bullet>
                  ))}
                </View>
              ))}
            </Section>

            <Section title="Education">
              {resume.education.map((item) => (
                <View key={item.title} style={styles.credBlock}>
                  <View style={styles.jobHeader}>
                    <Text style={styles.credTitle}>{item.title}</Text>
                    <Text style={styles.period}>{item.year}</Text>
                  </View>
                  <Text style={styles.credDetail}>{item.detail}</Text>
                </View>
              ))}
            </Section>
          </View>

          {/* Sidebar */}
          <View style={styles.aside}>
            <Section title="Technical Skills">
              <View style={styles.skillWrap}>
                {resume.technicalSkills.map((skill) => (
                  <Text key={skill} style={styles.skillChip}>
                    {skill}
                  </Text>
                ))}
              </View>
            </Section>

            <Section title="Competencies">
              {resume.competencies.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </Section>

            <Section title="Certifications">
              {resume.certifications.map((item) => (
                <View key={item.title} style={styles.credBlock}>
                  <View style={styles.jobHeader}>
                    <Text style={styles.credTitle}>{item.title}</Text>
                    <Text style={styles.period}>{item.year}</Text>
                  </View>
                  <Text style={styles.credDetail}>{item.detail}</Text>
                </View>
              ))}
            </Section>

            <Section title="References">
              {resume.references.map((ref) => (
                <View key={ref.name} style={styles.refBlock}>
                  <Text style={styles.refName}>{ref.name}</Text>
                  <Text style={styles.refRole}>{ref.role}</Text>
                </View>
              ))}
            </Section>
          </View>
        </View>
      </Page>
    </Document>
  );
}
