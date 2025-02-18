"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BarChart3, Users, Settings } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">TimeTrack Pro</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive time tracking solution for modern businesses
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/auth/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </div>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Time Tracking</CardTitle>
                <CardDescription>
                  Effortlessly track work hours with our intuitive interface
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Comprehensive reports and insights for better decision making
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Team Management</CardTitle>
                <CardDescription>
                  Manage your team's schedules and permissions efficiently
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Customization</CardTitle>
                <CardDescription>
                  Flexible settings to match your organization's needs
                </CardDescription>
              </CardHeader>
            </Card>
          </section>

          <section className="py-8">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">For Employees</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Easy clock in/out</li>
                      <li>Track breaks and overtime</li>
                      <li>View personal reports</li>
                      <li>Mobile accessibility</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">For Managers</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Team overview dashboard</li>
                      <li>Approval workflows</li>
                      <li>Advanced reporting</li>
                      <li>Schedule management</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">For Admins</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>User management</li>
                      <li>Role configuration</li>
                      <li>System settings</li>
                      <li>Integration options</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}