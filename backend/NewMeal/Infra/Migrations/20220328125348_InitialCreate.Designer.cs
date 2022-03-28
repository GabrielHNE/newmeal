﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NewMeal.Infra;

namespace NewMeal.Infra.Migrations
{
    [DbContext(typeof(NewMealDbContext))]
    [Migration("20220328125348_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.15");

            modelBuilder.Entity("NewMeal.Domain.Models.InfoLogin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<int>("PerfilId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Senha")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("PerfilId")
                        .IsUnique();

                    b.ToTable("InfoLogins");
                });

            modelBuilder.Entity("NewMeal.Domain.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Compl")
                        .HasColumnType("TEXT");

                    b.Property<string>("Contato")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.Property<string>("Numero")
                        .HasColumnType("TEXT");

                    b.Property<string>("Role")
                        .HasColumnType("TEXT");

                    b.Property<string>("Rua")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("NewMeal.Domain.Models.InfoLogin", b =>
                {
                    b.HasOne("NewMeal.Domain.Models.User", "Perfil")
                        .WithOne("InfoLogin")
                        .HasForeignKey("NewMeal.Domain.Models.InfoLogin", "PerfilId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Perfil");
                });

            modelBuilder.Entity("NewMeal.Domain.Models.User", b =>
                {
                    b.Navigation("InfoLogin");
                });
#pragma warning restore 612, 618
        }
    }
}
