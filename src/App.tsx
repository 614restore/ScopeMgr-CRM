import { useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { CustomerProvider } from "./lib/CustomerContext";
import { CompanyProvider } from "./lib/CompanyContext";
import { ThemeProvider } from "./lib/ThemeContext";
import { UserProvider } from "./lib/UserContext";
import { CalendarProvider } from "./lib/CalendarContext";
import { PermissionsProvider } from "./lib/PermissionsContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SplashScreen } from "./components/SplashScreen";
import { Dashboard } from "./components/Dashboard";

import { CustomerDetails } from "./components/CustomerDetails";
import { CustomersList } from "./components/CustomersList";
import { NewCustomer } from "./components/NewCustomer";
import { CustomerIntake } from "./components/CustomerIntake";
import { DocumentPacket } from "./components/DocumentPacket";
import { ContingencyAgreement } from "./components/ContingencyAgreement";
import { RightToCancel } from "./components/RightToCancel";
import { CertificateOfCompletion } from "./components/CertificateOfCompletion";
import { FormalContingencyAgreement } from "./components/FormalContingencyAgreement";
import { FormalRightToCancel } from "./components/FormalRightToCancel";
import { FormalCertificateOfCompletion } from "./components/FormalCertificateOfCompletion";
import { BeforeAfterReport } from "./components/BeforeAfterReport";
import { InspectionReport } from "./components/InspectionReport";
import { PhotoAlbum } from "./components/PhotoAlbum";
import { TeamManagement } from "./components/TeamManagement";
import { RoleEditor } from "./components/RoleEditor";
import { CompanySettings } from "./components/CompanySettings";
import { StartInspection } from "./components/StartInspection";
import { EditCustomer } from "./components/EditCustomer";
import { Projects } from "./components/Projects";
import { ProjectDetails } from "./components/ProjectDetails";
import { Calendar } from "./components/Calendar";
import { AddProject } from "./components/AddProject";
import { InspectionReportEditor } from "./components/InspectionReportEditor";
import { BeforeAfterReportEditor } from "./components/BeforeAfterReportEditor";
import { TeamSettings } from "./components/TeamSettings";

function AppContent() {
  // Suppress known development warnings
  useEffect(() => {
    const originalWarn = console.warn;
    const originalError = console.error;
    
    console.warn = (...args: any[]) => {
      const message = args[0];
      if (
        typeof message === 'string' &&
        (message.includes('Detected multiple Jotai instances') ||
         message.includes('Warning: '))
      ) {
        return;
      }
      originalWarn(...args);
    };

    console.error = (...args: any[]) => {
      const message = args[0];
      // Suppress known safe errors
      if (
        typeof message === 'string' &&
        (message.includes('Geolocation error:') ||
         message === 'Geolocation error:')
      ) {
        return;
      }
      originalError(...args);
    };
    
    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  return (
    <div className="h-screen bg-background text-foreground">
      <ErrorBoundary>
        <Routes>
          {/* Splash */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

                        {/* Main Dashboard */}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Customer Routes */}
                        <Route path="/customer/:id" element={<CustomerDetails />} />
                        <Route path="/customer/:id/edit" element={<EditCustomer />} />
                        <Route path="/new-customer" element={<NewCustomer />} />
                        <Route path="/customer-intake" element={<CustomerIntake />} />

                        {/* Document Routes - Signing */}
                        <Route path="/documents" element={<DocumentPacket />} />
                        <Route path="/documents/contingency-agreement" element={<ContingencyAgreement />} />
                        <Route path="/documents/right-to-cancel" element={<RightToCancel />} />
                        <Route path="/documents/certificate" element={<CertificateOfCompletion />} />

                        {/* Document Routes - Formal Views */}
                        <Route path="/documents/view/contingency-agreement" element={<FormalContingencyAgreement />} />
                        <Route path="/documents/view/right-to-cancel" element={<FormalRightToCancel />} />
                        <Route path="/documents/view/certificate" element={<FormalCertificateOfCompletion />} />

                        {/* Inspection Route */}
                        <Route path="/start-inspection" element={<StartInspection />} />

                        {/* Report Routes */}
                        <Route path="/reports/before-after" element={<BeforeAfterReport />} />
                        <Route path="/reports/before-after/edit" element={<BeforeAfterReportEditor />} />
                        <Route path="/reports/inspection" element={<InspectionReport />} />
                        <Route path="/reports/inspection/edit" element={<InspectionReportEditor />} />
                        <Route path="/reports/photos" element={<PhotoAlbum />} />

                        {/* Team Routes */}
                        <Route path="/teams" element={<TeamManagement />} />
                        <Route path="/teams/create-role" element={<RoleEditor />} />
                        <Route path="/teams/edit-role/:id" element={<RoleEditor />} />

                        {/* Placeholder routes for bottom nav */}
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/project/:id" element={<ProjectDetails />} />
                        <Route path="/add-project" element={<AddProject />} />
                        <Route path="/customers" element={<CustomersList />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/settings" element={<CompanySettings />} />
                        <Route path="/team-settings" element={<TeamSettings />} />

                        {/* Fallback */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
      </ErrorBoundary>

      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast: 'bg-card text-foreground border-border',
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <ThemeProvider>
          <UserProvider>
            <PermissionsProvider>
              <CompanyProvider>
                <CustomerProvider>
                  <CalendarProvider>
                    <AppContent />
                  </CalendarProvider>
                </CustomerProvider>
              </CompanyProvider>
            </PermissionsProvider>
          </UserProvider>
        </ThemeProvider>
      </HashRouter>
    </ErrorBoundary>
  );
}