﻿// <auto-generated />
using CookieData.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CookieData.Migrations
{
    [DbContext(typeof(CookieContext))]
    [Migration("20230115212321_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CookieData.Entities.ClickUpgrade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ClickUpgradeId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("GameAccountId")
                        .HasColumnType("int");

                    b.Property<long>("Level")
                        .HasColumnType("bigint");

                    b.Property<int>("UpgradeInfoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("GameAccountId")
                        .IsUnique();

                    b.HasIndex("UpgradeInfoId");

                    b.ToTable("ClickUpgrade", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.GameAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("GameAccountId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<long>("Clicks")
                        .HasColumnType("bigint");

                    b.Property<double>("Cookies")
                        .HasColumnType("float");

                    b.Property<double>("Networth")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("GameAccount", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.Upgrade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("UpgradeId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<long>("Amount")
                        .HasColumnType("bigint");

                    b.Property<int>("GameAccountId")
                        .HasColumnType("int");

                    b.Property<long>("Level")
                        .HasColumnType("bigint");

                    b.Property<int>("UpgradeInfoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("GameAccountId");

                    b.HasIndex("UpgradeInfoId");

                    b.ToTable("Upgrade", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.UpgradeInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("UpgradeInfoId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<long>("BasePrice")
                        .HasColumnType("bigint");

                    b.Property<double>("BaseValue")
                        .HasColumnType("float");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("UpgradeInfo", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BasePrice = 100L,
                            BaseValue = 1.0,
                            Image = "images/Upgrades/Clicker",
                            Name = "Click"
                        },
                        new
                        {
                            Id = 2,
                            BasePrice = 15L,
                            BaseValue = 0.10000000000000001,
                            Image = "images/Upgrades/HandMate",
                            Name = "Hand Mate"
                        },
                        new
                        {
                            Id = 3,
                            BasePrice = 100L,
                            BaseValue = 1.0,
                            Image = "images/Upgrades/RollingPin",
                            Name = "Rolling Pin"
                        },
                        new
                        {
                            Id = 4,
                            BasePrice = 1100L,
                            BaseValue = 8.0,
                            Image = "images/Upgrades/Oven",
                            Name = "Oven"
                        },
                        new
                        {
                            Id = 5,
                            BasePrice = 12000L,
                            BaseValue = 47.0,
                            Image = "images/Upgrades/GrandDaughter",
                            Name = "Grand Daughter"
                        },
                        new
                        {
                            Id = 6,
                            BasePrice = 130000L,
                            BaseValue = 260.0,
                            Image = "images/Upgrades/Baker",
                            Name = "Baker"
                        },
                        new
                        {
                            Id = 7,
                            BasePrice = 1400000L,
                            BaseValue = 1400.0,
                            Image = "images/Upgrades/GrannyBoss",
                            Name = "Granny Boss"
                        },
                        new
                        {
                            Id = 8,
                            BasePrice = 20000000L,
                            BaseValue = 7800.0,
                            Image = "images/Upgrades/BunsStall",
                            Name = "Buns Stall"
                        },
                        new
                        {
                            Id = 9,
                            BasePrice = 330000000L,
                            BaseValue = 44000.0,
                            Image = "images/Upgrades/Bakery",
                            Name = "Bakery"
                        },
                        new
                        {
                            Id = 10,
                            BasePrice = 5100000000L,
                            BaseValue = 260000.0,
                            Image = "images/Upgrades/GrannysRestaurant",
                            Name = "Granny's Restaurant"
                        },
                        new
                        {
                            Id = 11,
                            BasePrice = 75000000000L,
                            BaseValue = 1600000.0,
                            Image = "images/Upgrades/CookieFranchise",
                            Name = "Cookie Franchise"
                        });
                });

            modelBuilder.Entity("CookieData.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("UserId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("GameAccountId")
                        .HasColumnType("int");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("GameAccountId")
                        .IsUnique();

                    b.ToTable("User", (string)null);
                });

            modelBuilder.Entity("CookieData.Entities.ClickUpgrade", b =>
                {
                    b.HasOne("CookieData.Entities.GameAccount", "GameAccount")
                        .WithOne("ClickUpgrade")
                        .HasForeignKey("CookieData.Entities.ClickUpgrade", "GameAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CookieData.Entities.UpgradeInfo", "UpgradeInfo")
                        .WithMany("ClickUpgrades")
                        .HasForeignKey("UpgradeInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameAccount");

                    b.Navigation("UpgradeInfo");
                });

            modelBuilder.Entity("CookieData.Entities.Upgrade", b =>
                {
                    b.HasOne("CookieData.Entities.GameAccount", "GameAccount")
                        .WithMany("Upgrades")
                        .HasForeignKey("GameAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CookieData.Entities.UpgradeInfo", "UpgradeInfo")
                        .WithMany("Upgrades")
                        .HasForeignKey("UpgradeInfoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameAccount");

                    b.Navigation("UpgradeInfo");
                });

            modelBuilder.Entity("CookieData.Entities.User", b =>
                {
                    b.HasOne("CookieData.Entities.GameAccount", "GameAccount")
                        .WithOne("User")
                        .HasForeignKey("CookieData.Entities.User", "GameAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameAccount");
                });

            modelBuilder.Entity("CookieData.Entities.GameAccount", b =>
                {
                    b.Navigation("ClickUpgrade")
                        .IsRequired();

                    b.Navigation("Upgrades");

                    b.Navigation("User")
                        .IsRequired();
                });

            modelBuilder.Entity("CookieData.Entities.UpgradeInfo", b =>
                {
                    b.Navigation("ClickUpgrades");

                    b.Navigation("Upgrades");
                });
#pragma warning restore 612, 618
        }
    }
}