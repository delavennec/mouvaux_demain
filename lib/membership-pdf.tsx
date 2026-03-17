import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Styles pour le PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 25,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
    marginTop: 15,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 3,
  },
  fieldValue: {
    fontSize: 11,
    color: '#000000',
    paddingBottom: 3,
    borderBottom: '1 dotted #666666',
    minHeight: 15,
  },
  fieldValueFilled: {
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
    paddingBottom: 3,
    borderBottom: '1 solid #000000',
    minHeight: 15,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  checkboxSquare: {
    width: 12,
    height: 12,
    border: '2 solid #000000',
    marginRight: 8,
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    border: '2 solid #000000',
    backgroundColor: '#000000',
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
  },
  infoBox: {
    marginTop: 10,
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#f5f5f5',
    border: '1 solid #cccccc',
  },
  infoText: {
    fontSize: 9.5,
    color: '#000000',
    lineHeight: 1.6,
    marginBottom: 5,
  },
  engagementSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  engagementText: {
    fontSize: 10,
    color: '#000000',
    lineHeight: 1.8,
    marginBottom: 8,
  },
  signatureSection: {
    marginTop: 25,
  },
  signatureLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  signatureDateLine: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 10,
  },
  signatureBox: {
    width: 200,
    height: 70,
    marginTop: 8,
    marginBottom: 5,
  },
  signatureImage: {
    width: 180,
    height: 60,
    objectFit: 'contain',
  },
  presidentSection: {
    marginTop: 30,
    paddingTop: 15,
    borderTop: '1 solid #cccccc',
  },
  presidentTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  presidentName: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 5,
  },
});

type MembershipPDFProps = {
  name: string;
  email: string;
  birthDate?: string;
  birthPlace?: string;
  nationality?: string;
  address?: string;
  phone?: string;
  signatureUrl?: string; // URL de l'image de signature du président
};

export const MembershipPDF: React.FC<MembershipPDFProps> = ({ 
  name, 
  email, 
  birthDate,
  birthPlace,
  nationality,
  address,
  phone,
  signatureUrl 
}) => {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  // Format the birth date if provided
  const formattedBirthDate = birthDate 
    ? new Date(birthDate).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : '';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.title}>Bulletin d'adhésion – Membre d'Honneur</Text>
        </View>

        {/* Informations personnelles */}
        <Text style={styles.sectionTitle}>Informations personnelles</Text>
        
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Nom et prénom :</Text>
          <Text style={name ? styles.fieldValueFilled : styles.fieldValue}>{name || ''}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Date de naissance :</Text>
          <Text style={formattedBirthDate ? styles.fieldValueFilled : styles.fieldValue}>
            {formattedBirthDate || ''}
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Lieu de naissance :</Text>
          <Text style={birthPlace ? styles.fieldValueFilled : styles.fieldValue}>{birthPlace || ''}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Nationalité :</Text>
          <Text style={nationality ? styles.fieldValueFilled : styles.fieldValue}>{nationality || ''}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Adresse complète :</Text>
          <Text style={address ? styles.fieldValueFilled : styles.fieldValue}>{address || ''}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Téléphone :</Text>
          <Text style={phone ? styles.fieldValueFilled : styles.fieldValue}>{phone || ''}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Email :</Text>
          <Text style={email ? styles.fieldValueFilled : styles.fieldValue}>{email || ''}</Text>
        </View>

        {/* Catégorie d'adhésion */}
        <Text style={styles.sectionTitle}>Catégorie d'adhésion</Text>
        
        <View style={styles.checkbox}>
          <View style={styles.checkboxChecked} />
          <Text style={styles.checkboxLabel}>Membre d'honneur</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Conformément à l'Assemblée Générale Extraordinaire du 26/02/2026 et aux statuts de
            l'association, sont considérés comme membres d'honneur :
          </Text>
          <Text style={styles.infoText}>
            Les adhérents ayant soutenu ou participé à la candidature de la liste "Renouveau pour
            Mouvaux avec Charles Delavenne" aux élections municipales des 15 et 22 mars 2026, et
            désignés comme tels par le Président.
          </Text>
          <Text style={styles.infoText}>
            Les membres d'honneur sont dispensés de cotisation annuelle.
          </Text>
        </View>

        {/* Engagement du membre */}
        <Text style={styles.sectionTitle}>Engagement du membre</Text>
        
        <View style={styles.engagementSection}>
          <Text style={styles.engagementText}>
            Je soussigné(e) <Text style={{ fontWeight: 'bold' }}>{name}</Text> reconnais
            avoir pris connaissance des statuts de l'association RPM – Renouveau pour Mouvaux et
            accepte d'en respecter les dispositions et confirme mon adhésion en qualité de
            Membre d'Honneur à l'association.
          </Text>
        </View>

        {/* Signature du membre */}
        <View style={styles.signatureSection}>
          <Text style={styles.signatureLabel}>Signature du membre*</Text>
          <Text style={styles.signatureDateLine}>Fait à Mouvaux, le {currentDate}</Text>
          <Text style={styles.fieldLabel}>Signature :</Text>
          <View style={styles.signatureBox} />
        </View>

        {/* Signature du président */}
        <View style={styles.presidentSection}>
          <Text style={styles.presidentTitle}>Pour l'association</Text>
          <Text style={styles.presidentName}>Nom du président : Charles DELAVENNE</Text>
          <Text style={styles.signatureLabel}>Signature :</Text>
          {signatureUrl ? (
            <View style={styles.signatureBox}>
              <Image src={signatureUrl} style={styles.signatureImage} />
            </View>
          ) : (
            <View style={styles.signatureBox} />
          )}
        </View>
      </Page>
    </Document>
  );
};

// Fonction pour générer le PDF en remplissant les champs du template
export async function generateMembershipPDF(data: MembershipPDFProps): Promise<Buffer> {
  const { PDFDocument } = await import('pdf-lib');
  const fs = await import('fs');
  const path = await import('path');

  const templatePath = path.join(process.cwd(), 'public', 'bulletin-adhesion-template.pdf');
  const templateBytes = fs.readFileSync(templatePath);

  const pdfDoc = await PDFDocument.load(templateBytes);
  const form = pdfDoc.getForm();

  const currentDate = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const setField = (fieldName: string, value: string) => {
    try {
      form.getTextField(fieldName).setText(value);
    } catch {
      console.warn(`Champ PDF "${fieldName}" introuvable`);
    }
  };

  const checkField = (fieldName: string) => {
    try {
      form.getCheckBox(fieldName).check();
    } catch {
      console.warn(`Case PDF "${fieldName}" introuvable`);
    }
  };

  setField('Nom1', data.name);
  setField('Nom2', data.name);
  setField('Date de naissance', data.birthDate || '');
  setField('Lieu de naissance', data.birthPlace || '');
  setField('Nationalité', data.nationality || '');
  setField('Adresse complète', data.address || '');
  setField('Téléphone', data.phone || '');
  setField('Email', data.email);
  setField('Date', currentDate);
  checkField('Check Box4');

  form.flatten();

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
